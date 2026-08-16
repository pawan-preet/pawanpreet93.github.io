#!/usr/bin/env python3
"""Turn the raw simulator captures and app icons into the site's WebP assets.

Reads from a capture directory (see README) and writes:
  assets/icons/<slug>.webp        256px app icon
  assets/shots/<slug>-<n>.webp    device screenshots, deduped and capped
  _build/generated_assets.json    per-app shot list + sampled accent colour

Near-identical captures are dropped: several apps' tabs render the same screen in
the simulator, and three copies of one screen is worse than one.
"""
import json, os, shutil, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
CAPTURES = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "captures")

SHOT_W = 620          # rendered at ~310 CSS px on the site, 2x for retina
ICON_W = 256
MAX_SHOTS = 3
DIFF_THRESHOLD = 6.0  # mean per-channel difference below this = the same screen

# site slug -> capture folder name
FOLDERS = {
    "moon": "Moon", "pomodoro": "Pomodoro", "watermyplants": "WaterMyPlants",
    "enso": "Enso", "helia": "Helia", "flux": "Flux", "linen": "Linen",
    "stack": "Stack", "slate": "Slate", "folio": "Folio", "dayly": "Dayly",
    "flaps": "Flaps", "cadence": "Cadence", "haru": "Haru", "meridian": "Meridian",
    "threshold": "Threshold", "apex": "Apex", "cabin": "Cabin",
    "flappomodoro": "FlapPomodoro",
}
# Preferred order — the first is the one used as the app's hero.
ORDER = {
    "moon": ["home", "detail", "cities"],
    "flux": ["home", "caffeine", "trends"],
    "linen": ["home", "wall", "volume"],
    "dayly": ["home", "tab1", "tab2"],
    "helia": ["home", "exposure", "plan"],
    "enso": ["home", "breakdown", "history"],
    "stack": ["home", "tab1", "tab2"],
    "slate": ["home", "project", "area"],
    "meridian": ["home", "tab1", "sight"],
    "apex": ["home", "season"],
    "cadence": ["home", "tab1"],
    "folio": ["home", "editor"],
}


def mean_diff(a, b):
    """Mean per-channel difference between two images, on a small thumbnail."""
    sa = a.convert("RGB").resize((48, 104))
    sb = b.convert("RGB").resize((48, 104))
    pa, pb = sa.load(), sb.load()
    total = 0
    for y in range(104):
        for x in range(48):
            ra, ga, ba = pa[x, y]
            rb, gb, bb = pb[x, y]
            total += abs(ra - rb) + abs(ga - gb) + abs(ba - bb)
    return total / (48 * 104 * 3)


def accent_from_icon(path):
    """Pick a saturated, mid-luminance colour from the icon for the app's accent."""
    im = Image.open(path).convert("RGB").resize((48, 48))
    best, best_score = (90, 90, 90), -1
    for (count, (r, g, b)) in im.getcolors(48 * 48) or []:
        mx, mn = max(r, g, b), min(r, g, b)
        if mx == 0:
            continue
        sat = (mx - mn) / mx
        lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
        if not (0.12 < lum < 0.82):
            continue
        score = sat * 2.2 + (count / (48 * 48)) * 0.8
        if score > best_score:
            best_score, best = score, (r, g, b)
    return "#%02x%02x%02x" % best


def main():
    icons_dir = f"{SITE}/assets/icons"
    if os.path.isdir(icons_dir):
        shutil.rmtree(icons_dir)
    os.makedirs(icons_dir, exist_ok=True)
    shots_dir = f"{SITE}/assets/shots"
    if os.path.isdir(shots_dir):
        shutil.rmtree(shots_dir)
    os.makedirs(shots_dir, exist_ok=True)

    data = json.load(open(f"{HERE}/data.json"))
    out = {}

    for app in data["apps"]:
        slug = app["slug"]
        folder = FOLDERS.get(slug)
        entry = {"shots": [], "accent": None}

        icon_src = f"{CAPTURES}/icons/{folder}.png"
        if os.path.exists(icon_src):
            icon = Image.open(icon_src).convert("RGB")
            icon.resize((ICON_W, ICON_W), Image.LANCZOS).save(
                f"{SITE}/assets/icons/{slug}.webp", "WEBP", quality=90, method=6)
            entry["accent"] = accent_from_icon(icon_src)

        src_dir = f"{CAPTURES}/shots/{folder}"
        if os.path.isdir(src_dir):
            names = [f[:-4] for f in os.listdir(src_dir) if f.endswith(".png")]
            order = ORDER.get(slug, [])
            names.sort(key=lambda n: (order.index(n) if n in order else 99, n))
            kept = []
            for n in names:
                im = Image.open(f"{src_dir}/{n}.png")
                if any(mean_diff(im, k[1]) < DIFF_THRESHOLD for k in kept):
                    continue
                kept.append((n, im))
                if len(kept) >= MAX_SHOTS:
                    break
            for i, (n, im) in enumerate(kept, 1):
                h = round(im.height * SHOT_W / im.width)
                name = f"{slug}-{i}.webp"
                im.convert("RGB").resize((SHOT_W, h), Image.LANCZOS).save(
                    f"{shots_dir}/{name}", "WEBP", quality=82, method=6)
                # Record the real pixel size so the markup declares the true aspect
                # ratio and the browser reserves exactly the right box.
                entry["shots"].append({"src": name, "w": SHOT_W, "h": h})

        out[slug] = entry
        print(f"{slug:14} {len(entry['shots'])} shots  accent {entry['accent']}")

    json.dump(out, open(f"{HERE}/generated_assets.json", "w"), indent=1)


if __name__ == "__main__":
    main()
