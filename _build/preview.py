#!/usr/bin/env python3
"""Render every built component onto one page at fixed progress values, for review.

The real site drives --p from scroll. Here it is pinned, so each component can be
inspected at the start, middle and end of its range without scrolling.

    python3 _build/preview.py            # one tile per component at --p .62
    python3 _build/preview.py 0 .5 1     # three tiles per component
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
PARTS = os.path.join(HERE, "parts")

args = sys.argv[1:]
ONLY = None
STOPS = []
for a in args:
    if a.startswith("--only="):
        ONLY = a.split("=", 1)[1].split(",")
    else:
        STOPS.append(a)
STOPS = STOPS or ["0.62"]

accents = {}
with open(f"{HERE}/data.json") as f:
    for a in json.load(f)["apps"]:
        accents[a["slug"]] = a["accent"]

slugs = sorted(f[:-5] for f in os.listdir(PARTS)) if os.path.isdir(PARTS) else []
if ONLY:
    slugs = [s for s in slugs if s in ONLY]

tiles = []
for slug in slugs:
    with open(f"{PARTS}/{slug}.html", encoding="utf-8") as f:
        markup = f.read()
    for stop in STOPS:
        tiles.append(
            f'<figure data-app="{slug}" style="--accent:{accents.get(slug, "#6ba3ff")};--p:{stop}">'
            f'<figcaption>{slug} &nbsp;&middot;&nbsp; --p {stop}</figcaption>'
            f'<div class="stage">{markup}</div></figure>')

html = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Component preview</title>
<link rel="stylesheet" href="assets/site.css">
<style>
  body {{ padding: 2rem 0; }}
  .sheet {{ display: grid; gap: 1.25rem;
    grid-template-columns: {"repeat(%d, 1fr)" % len(STOPS) if len(STOPS) > 1
                            else "repeat(auto-fill, minmax(min(100%, 17rem), 1fr))"};
    width: min(100% - 2rem, 150rem); margin-inline: auto; }}
  figure {{ margin: 0; }}
  figcaption {{ font-family: var(--mono); font-size: .5625rem; letter-spacing: .18em;
    text-transform: uppercase; color: var(--ink-3); margin-bottom: .4rem; }}
  .stage {{ position: relative; min-height: 20rem; display: grid; place-items: center;
    padding: .9rem; border: 1px solid var(--hairline); border-radius: .6rem;
    overflow: hidden; container-type: inline-size; }}
  .stage::before {{ content: ""; position: absolute; inset: 0; z-index: -1;
    background: radial-gradient(120% 80% at 60% 40%,
      color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 65%); }}
  .stage > * {{ width: 100%; }}
</style>
</head><body>
<div class="sheet">{''.join(tiles)}</div>
</body></html>
"""

with open(f"{SITE}/_preview.html", "w", encoding="utf-8") as f:
    f.write(html)
print(f"_preview.html: {len(slugs)} components x {len(STOPS)} stops")
for s in slugs:
    print("  ", s)
