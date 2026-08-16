# pawan.bio

A personal site and app portfolio. Plain static HTML, one stylesheet, one small
script, local fonts and images. No framework, no runtime dependencies, and no
external requests of any kind, so it drops onto GitHub Pages (or any static host)
as-is.

## Running it

```sh
python3 -m http.server 8899
open http://localhost:8899
```

Serve it rather than opening `file://` — browsers refuse to load local fonts over
the file protocol.

## Layout

| Path | What it is |
|---|---|
| `index.html` | The whole site: a cover, then one full-height panel per app. |
| `apps/<slug>.html` | One page per app: screenshots, prose, and what it does with your data. |
| `legal/<slug>/{terms,privacy}.html` | **Unlisted.** Per-app Terms of Use and Privacy Policy. |
| `legal/index.html` | **Unlisted.** Every legal URL in one table, for pasting into App Store Connect. |
| `privacy.html` | Legacy URL, kept alive. See "Don't break these" below. |
| `assets/site.css` | The entire design system. |
| `assets/site.js` | Publishes each panel's scroll progress as `--p`. Nothing else. |
| `_build/data.json` | **All the copy.** Edit this to change any text on the site. |
| `_build/build.py` | Page generation. |
| `_build/assets_build.py` | Screenshot and icon pipeline. |
| `_build/parts/<slug>.html` | **The live components.** One per app, inlined into the deck. |
| `_build/components.py` | Loads the parts; sets how much scroll each panel gets. |
| `_build/preview.py` | Renders every component at fixed progress values for review. |
| `assets/art/` | The three photographs CSS can't honestly fake. |

## The components

The index is a scroll deck: one full-height panel per app, and each panel rebuilds
that app's signature screen in the browser rather than showing a screenshot. Moon's
terminator sweeps, Apex's circuit draws itself, Flux morphs from water to caffeine,
the Flaps and Flap Pomodoro boards actually flip.

Every one animates from a single custom property, `--p`: the panel's scroll
progress from 0 to 1, written by `assets/site.js` on each visible panel. There is
no per-component JavaScript. A component is a scoped `<style>` block plus one root
`<div class="c-<slug>">`, with no scripts and no external requests.

`.panel { --p: 1 }` is the default so that if the script never runs, every component
renders its *finished* state. A portfolio that shows nothing is a worse failure than
one that doesn't move.

To review them:

```sh
python3 _build/preview.py 0.35 0.8        # every component, at two progress values
python3 _build/preview.py --only=moon 0 .5 1
```

## Type

Gloock for display, Figtree for body, IBM Plex Mono for labels.
Each component is set in its own app's typeface, via `[data-app="…"]` rules that
redefine `--display`/`--sans`/`--mono` on the panel. Three faces cannot be served as
webfonts and are substituted: **Kefir** (commercial) → Instrument Serif, and Apple's
**SF Compact Rounded** → Quicksand, **New York** → Instrument Serif, **SF Mono** →
IBM Plex Mono. Everything shipped in `assets/fonts/` is SIL Open Font Licence,
subsetted to the characters the site uses.

## Regenerating

The HTML is generated, because 17 apps produce 17 app pages and 35 legal pages and
those must not drift apart by hand. The output is still plain HTML with nothing to
install at runtime.

```sh
python3 _build/assets_build.py <captures-dir>   # icons + screenshots -> WebP (needs Pillow)
python3 _build/build.py                          # index, app pages, legal pages
```

`<captures-dir>` needs `icons/<AppFolder>.png` and `shots/<AppFolder>/<screen>.png`.
Screens that are near-identical to one already kept are dropped automatically, and
each app keeps at most three.

To change wording, edit `_build/data.json` and re-run `build.py`. To add an app,
append to `apps` in `data.json`, add its folder to `FOLDERS` in `assets_build.py`,
and re-run both.

## The legal pages

Every app has a Terms of Use and a Privacy Policy at a stable URL. They carry
`noindex`, `robots.txt` disallows `/legal/`, and **nothing on the site links to
them** — they exist to be linked from each app's paywall and from App Store
Connect. `legal/index.html` lists them all for copy-pasting.

The text is generated per app from the facts in `data.json`, so an app that ships
analytics says so and an app that ships none says that instead. It is written to be
accurate, not to be legal advice; have a lawyer read it before you rely on it.

## Don't break these

Two URLs from the previous version of this site are almost certainly registered in
App Store Connect for the two live apps:

- `/privacy.html` — now a page linking to every app's policy.
- `/watermyplant.html` — now redirects to `/apps/watermyplants.html`.

Removing either could break a live App Store listing. Keep them.

## Screenshots

Captured from a real iPhone 17 Pro simulator (iOS 27), status bar pinned to 9:41,
each app seeded with its own demo data through its debug launch arguments rather
than posed by hand.
