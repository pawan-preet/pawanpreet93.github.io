"""The live components: each app's signature screen, rebuilt for the browser.

Each one lives in _build/parts/<slug>.html as a scoped <style> block plus its markup,
and animates from a single CSS custom property `--p`: the panel's scroll progress,
written by site.js. Apps without a part fall back to a floating screenshot.
"""
import html
import os

E = html.escape
HERE = os.path.dirname(os.path.abspath(__file__))
PARTS = os.path.join(HERE, "parts")

# Components that tell a multi-stage story need more scroll to tell it in.
PANEL_LENGTH = {
    "stack": "320svh",   # today -> tracking -> experiments
    "flux": "280svh",    # water -> caffeine
    "meridian": "240svh",
    "moon": "240svh",
    "apex": "230svh",
    "flaps": "230svh",
    "haru": "230svh",
}


def part(slug):
    """The hand-built component for this app, if there is one."""
    path = os.path.join(PARTS, f"{slug}.html")
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8") as f:
        markup = f.read().strip()
    return markup or None


def device(app, gen, prefix=""):
    """Fallback: the app's own screenshot, floating."""
    shots = gen.get(app["slug"], {}).get("shots", [])
    if not shots:
        return ""
    s = shots[0]
    return (f'<div class="c-device"><img src="{prefix}assets/shots/{s["src"]}" '
            f'alt="{E(app["name"])} running on iPhone" width="{s["w"]}" height="{s["h"]}" '
            f'loading="lazy" decoding="async"></div>')


def render(app, gen, prefix=""):
    return part(app["slug"]) or device(app, gen, prefix)


def panel_length(slug):
    return PANEL_LENGTH.get(slug, "195svh")


def available():
    if not os.path.isdir(PARTS):
        return []
    return sorted(f[:-5] for f in os.listdir(PARTS) if f.endswith(".html"))
