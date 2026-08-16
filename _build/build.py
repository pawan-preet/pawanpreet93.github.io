#!/usr/bin/env python3
"""Generate the static site from data.json.

Writes index.html, apps/<slug>.html, and the unlisted legal/<slug>/{terms,privacy}.html
pages. Everything it emits is plain HTML with no runtime dependencies.
"""
import html
import json
import os
import shutil
from datetime import date

import components

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
DOMAIN = "https://pawan.bio"
UPDATED = date.today().strftime("%d %B %Y")

data = json.load(open(f"{HERE}/data.json"))
gen = json.load(open(f"{HERE}/generated_assets.json"))
SITEINFO = data["site"]
APPS = data["apps"]
E = html.escape


def head(title, desc, css="assets/site.css", js="assets/site.js", noindex=False, accent=None):
    robots = '\n  <meta name="robots" content="noindex, nofollow">' if noindex else ""
    accent_css = f'\n  <style>:root{{--accent:{accent}}}</style>' if accent else ""
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{E(title)}</title>
  <meta name="description" content="{E(desc)}">{robots}
  <meta property="og:title" content="{E(title)}">
  <meta property="og:description" content="{E(desc)}">
  <meta property="og:type" content="website">
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#faf9f6">
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#100f0e">
  <link rel="preload" href="{css.rsplit('/',1)[0]}/fonts/Gloock-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="{css}">{accent_css}
  <script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
"""


def foot(js="assets/site.js"):
    return f"""
<script src="{js}" defer></script>
</body>
</html>
"""


def theme_button():
    return ('<button data-toggle-theme aria-label="Switch theme" '
            'style="position:fixed;top:1rem;right:1rem;z-index:20;width:2.25rem;height:2.25rem;'
            'border-radius:50%;border:1px solid var(--rule);background:var(--bg);color:var(--muted);'
            'cursor:pointer;font-size:.85rem;line-height:1" title="Switch theme">◐</button>')


def icon_markup(app, prefix=""):
    slug = app["slug"]
    shots = gen.get(slug, {})
    icon = f"{prefix}assets/icons/{slug}.webp"
    if os.path.exists(f"{SITE}/assets/icons/{slug}.webp"):
        return (f'<div class="app-icon"><img src="{icon}" alt="" width="256" height="256" '
                f'loading="lazy" decoding="async"></div>')
    # No icon shipped for this app yet — a monogram in its own colour, not a fake icon.
    return f'<div class="app-icon mono" aria-hidden="true">{E(app["name"][0])}</div>'


def stat_band():
    live = sum(1 for a in APPS if a.get("appStoreId"))
    plats = set()
    for a in APPS:
        plats.update(a["platforms"])
    clean = sum(1 for a in APPS if a["privacy"]["analytics"] == "none")
    stats = [(str(len(APPS)), "Native apps"),
             (str(len(plats)), "Apple platforms"),
             (f'{clean}<span class="small">/{len(APPS)}</span>', "With zero trackers"),
             (str(live), "On the App Store")]
    cells = "".join(f'<div class="stat reveal" data-group="s"><div class="v">{v}</div>'
                    f'<div class="k">{E(k)}</div></div>' for v, k in stats)
    return f'<div class="wrap"><div class="stats">{cells}</div></div>'


def panel(app, i):
    art = components.render(app, gen)
    store = ""
    if app.get("appStoreId"):
        store = ('<span class="platformline" style="color:var(--accent)">'
                 '&nbsp;&nbsp;·&nbsp;&nbsp;On the App Store</span>')
    flip = " flip" if i % 2 else ""
    # Multi-stage components need more scroll to play through.
    length = components.panel_length(app["slug"])
    return f"""
<section class="panel{flip}" data-app="{app['slug']}" style="--accent:{app['accent']};--len:{length}" aria-labelledby="h-{app['slug']}">
  <div class="stage">
    <div class="wrap grid">
      <div class="copy">
        <p class="kicker">{i + 1:02d} &nbsp;/&nbsp; {E(app["category"])}</p>
        <h2 class="display" id="h-{app['slug']}">{E(app["name"])}</h2>
        <p class="tag">{E(app["tagline"])}</p>
        <p class="body-2">{E(app["blurb"])}</p>
        <p class="platformline">{E(" · ".join(app["platforms"]))}{store}</p>
        <a class="open" href="apps/{app['slug']}.html">Open {E(app["name"])} <span>&rarr;</span></a>
      </div>
      <div class="art" aria-hidden="true">{art}</div>
    </div>
  </div>
</section>"""


# --------------------------------------------------------------------------- index
def build_index():
    s = SITEINFO
    out = [head(f'{s["name"]}, iOS engineer', s["intro"])]
    out.append(f"""<div class="runninghead"><div class="wrap">
  <span>{E(s["name"])}</span><span>{E(s["domain"])}</span>
</div></div>
<main id="main">
<header class="cover wrap">
  <div class="starfield" aria-hidden="true">{"".join(
    f'<i style="left:{x}%;top:{y}%;animation-delay:{d}s"></i>'
    for x, y, d in [(6,18,0),(17,64,1.4),(29,12,2.2),(41,74,0.7),(53,28,1.9),
                    (64,58,0.4),(72,16,2.6),(83,68,1.1),(91,32,2.0),(12,88,1.6),
                    (47,46,2.9),(88,84,0.9)])}</div>
  <p class="kicker">Portfolio</p>
  <h1>Pawanpreet<br>Singh</h1>
  <p class="tag">{E(s["intro"])}</p>
  <p class="platformline">{E(s["role"])} &nbsp;·&nbsp; {E(s["city"])}</p>
  <div class="scrollcue">Scroll</div>
</header>

{stat_band()}
""")

    for i, app in enumerate(APPS):
        out.append(panel(app, i))

    bio = "".join(f'<p class="body-2">{E(p)}</p>' for p in s["bio"])
    principles = "".join(
        f'<div class="feature reveal" data-group="p"><h4>{E(p["t"])}</h4><p>{E(p["d"])}</p></div>'
        for p in s["principles"])
    out.append(f"""
<section class="section wrap" id="about">
  <div class="two">
    <div class="reveal">
      <p class="kicker" style="color:var(--ink-3)">About</p>
      <h2 class="display">Seventeen apps, one stubborn idea.</h2>
      {bio}
    </div>
    <div class="reveal">{principles}</div>
  </div>
</section>

<footer class="wrap">
  <h2 class="reveal">Say hello.</h2>
  <p class="reveal body-2" style="max-width:38ch;margin-bottom:2.5rem">
    Happy to talk about any of it: the apps, the design decisions, or the parts that didn't work.
  </p>
  <a class="mail reveal" href="mailto:{E(s['email'])}">{E(s['email'])}</a>
  <div class="colophon">
    <span>&copy; {date.today().year} {E(s["name"])}</span>
    <span>Gloock · Figtree · IBM Plex Mono</span>
    <span>Captured on iPhone 17 Pro</span>
  </div>
</footer>
</main>""")
    out.append(foot())
    write(f"{SITE}/index.html", "".join(out))


# ------------------------------------------------------------------------ app page
def build_app(app):
    slug = app["slug"]
    shots = gen.get(slug, {}).get("shots", [])
    p = app["privacy"]

    rail = ""
    if shots:
        imgs = "".join(
            f'<img src="../assets/shots/{sh["src"]}" alt="{E(app["name"])} on iPhone" '
            f'width="{sh["w"]}" height="{sh["h"]}" loading="lazy" decoding="async">'
            for sh in shots)
        rail = (f'<div class="shots reveal" role="group" '
                f'aria-label="{E(app["name"])} screenshots" tabindex="0">{imgs}</div>')

    store_btn = ""
    if app.get("appStoreId"):
        store_btn = (f'<a class="store-link" href="https://apps.apple.com/app/id{app["appStoreId"]}">'
                     f'View on the App&nbsp;Store <span>&rarr;</span></a>')

    icon = f"{SITE}/assets/icons/{slug}.webp"
    if os.path.exists(icon):
        icon_html = (f'<div class="icon"><img src="../assets/icons/{slug}.webp" alt="" '
                     f'width="256" height="256"></div>')
    else:
        icon_html = f'<div class="icon mono" aria-hidden="true">{E(app["name"][0])}</div>'

    features = "".join(
        f'<div class="feature reveal" data-group="f"><h4>{E(h)}</h4></div>'
        for h in app["highlights"])

    tech = []
    if p.get("storage"):
        tech.append(("Storage", "On device", p["storage"]))
    if p.get("health"):
        tech.append(("Apple Health", "Read only", p["health"]))
    if p.get("location"):
        tech.append(("Location", "Only when used", p["location"]))
    tech.append(("Analytics", "None" if p["analytics"] == "none" else "Third party",
                 "No analytics of any kind." if p["analytics"] == "none" else p["analytics"]))
    if p.get("thirdparty"):
        tech.append(("Third parties", "Network", "; ".join(p["thirdparty"])))
    else:
        tech.append(("Third parties", "None", "No third-party SDKs, trackers or advertising."))
    tech_html = "".join(
        f'<div class="tech reveal" data-group="t"><div class="name">{E(n)}'
        f'<span class="sub">{E(sub)}</span></div><div class="how">{E(how)}</div></div>'
        for n, sub, how in tech)

    out = [head(f'{app["name"]}, by {SITEINFO["name"]}', app["tagline"],
                css="../assets/site.css", js="../assets/site.js", accent=app["accent"])]
    out.append(f"""<div class="runninghead"><div class="wrap">
  <a href="../index.html">{E(SITEINFO["name"])}</a><span>{E(app["name"])}</span>
</div></div>
<main id="main">
<div class="wrap"><a class="back" href="../index.html#h-{slug}">&larr; All work</a></div>

<header class="app-cover wrap">
  {icon_html}
  <p class="kicker">{E(app["category"])}</p>
  <h1>{E(app["name"])}</h1>
  <p class="tag">{E(app["tagline"])}</p>
  <p class="platformline" style="margin-top:2rem">{E(" · ".join(app["platforms"]))}</p>
  {store_btn}
</header>

{rail}

<section class="section wrap">
  <div class="two">
    <div class="reveal">
      <p class="kicker">The app</p>
      <h2 class="display">{E(app["tagline"])}</h2>
    </div>
    <div class="reveal">
      <p class="lede">{E(app["blurb"])}</p>
      <p class="body-2">{E(app["detail"])}</p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="two">
    <div class="reveal">
      <p class="kicker">Features</p>
      <h2 class="display">What it actually does.</h2>
    </div>
    <div>{features}</div>
  </div>
</section>

<section class="section wrap">
  <div class="two">
    <div class="reveal">
      <p class="kicker">Privacy</p>
      <h2 class="display">{E(p["summary"])}</h2>
    </div>
    <div>{tech_html}</div>
  </div>
</section>

<footer class="wrap">
  <h2 class="reveal">Questions about {E(app["name"])}?</h2>
  <a class="mail reveal" href="mailto:{E(SITEINFO['email'])}">{E(SITEINFO['email'])}</a>
  <div class="colophon"><span>&copy; {date.today().year} {E(SITEINFO["name"])}</span></div>
</footer>
</main>""")
    out.append(foot(js="../assets/site.js"))
    write(f"{SITE}/apps/{slug}.html", "".join(out))


# --------------------------------------------------------------------------- legal
def legal_head(app, kind):
    title = f'{app["name"]}: {kind}'
    return head(title, f'{kind} for {app["name"]}.',
                css="../../assets/site.css", js="../../assets/site.js",
                noindex=True, accent=app["accent"])


def privacy_page(app):
    p = app["privacy"]
    name = E(app["name"])
    parts = []

    parts.append(f"<p>{name} is built by {E(SITEINFO['name'])}. This policy explains what "
                 f"the app does with your information. It is short because the app does little: "
                 f"{E(p['summary'])[0].lower() + E(p['summary'])[1:]}</p>")

    parts.append("<h2>What is collected</h2>")
    if p["analytics"] == "none" and not p["thirdparty"]:
        parts.append(f"<p><strong>Nothing is collected by me.</strong> {name} has no accounts, "
                     "no sign-in, no advertising and no analytics. I receive no personal data "
                     "from your use of the app, and I have no way to identify you.</p>")
    else:
        parts.append(f"<p>{name} uses the third-party services listed below. Apart from those, "
                     "no personal data is collected by me, and there is no advertising.</p>")

    parts.append("<h2>Where your content lives</h2>")
    storage = E(p["storage"]).rstrip(".")
    if p.get("cloudSync"):
        parts.append(f"<p>{storage}. Data held in iCloud is stored in your own Apple "
                     "account, under Apple's terms, and I cannot read it.</p>")
    else:
        parts.append(f"<p>{storage}. It does not leave your device unless you export or "
                     "share it yourself.</p>")

    if p.get("health"):
        parts.append("<h2>Health data</h2>")
        parts.append(f"<p>{E(p['health'])}. Health data is never sold, never shared with third "
                     "parties, and never used for advertising. You can revoke access at any time "
                     "in the Health app under Sharing → Apps.</p>")

    if p.get("location"):
        parts.append("<h2>Location</h2>")
        parts.append(f"<p>{E(p['location'])}. You can revoke access at any time in "
                     "Settings → Privacy &amp; Security → Location Services.</p>")

    if p.get("thirdparty"):
        items = "".join(f"<li>{E(t)}</li>" for t in p["thirdparty"])
        parts.append("<h2>Third-party services</h2><ul>" + items + "</ul>")
        if p["analytics"] != "none":
            parts.append(f"<p>{E(p['analytics'])}. This is used to understand how the app is "
                         "used and to improve it. It is not used to build an advertising profile, and it is "
                         "not sold or shared with data brokers.</p>")
    else:
        parts.append("<h2>Third-party services</h2><p>None. The app contains no third-party "
                     "SDKs, no trackers and no advertising networks.</p>")

    if p.get("iap"):
        parts.append("<h2>Purchases</h2>")
        parts.append("<p>Purchases are processed by Apple. I never see your payment details. "
                     "Purchase status is used only to unlock features you have paid for.</p>")

    parts.append("<h2>Children</h2>")
    parts.append(f"<p>{name} is not directed at children under 13 and does not knowingly "
                 "collect information from them.</p>")

    parts.append("<h2>Your rights</h2>")
    parts.append("<p>Because your content stays on your device or in your own iCloud, you are "
                 "already in control of it: you can view, edit, export or delete it in the app, "
                 "and deleting the app removes its local data. If you have a question about your "
                 "data, email me and I will answer.</p>")

    parts.append("<h2>Changes</h2>")
    parts.append("<p>If this policy changes, the revised version will be posted at this address "
                 "with a new date.</p>")

    return "".join(parts)


def terms_page(app):
    p = app["privacy"]
    name = E(app["name"])
    parts = []

    parts.append(f"<p>These terms cover your use of {name}, an app published by "
                 f"{E(SITEINFO['name'])}. By downloading or using the app you agree to them.</p>")

    parts.append("<h2>Licence</h2>")
    parts.append(f"<p>You get a personal, non-exclusive, non-transferable licence to use "
                 f"{name} on Apple devices you own or control, as permitted by the App Store "
                 "Terms of Service. You may not resell, redistribute, reverse-engineer or "
                 "attempt to extract the source code of the app.</p>")

    if p.get("iap"):
        iap = p["iap"]
        plans = ", ".join(iap["plans"])
        parts.append("<h2>Subscriptions and purchases</h2>")
        parts.append(f"<p>{name} is free to use. {E(iap['name'])} is an optional paid upgrade "
                     f"offered as: {E(plans)}. {E(iap['trial'])} where offered.</p>")
        parts.append("<ul>"
                     "<li>Payment is charged to your Apple Account at confirmation of purchase.</li>"
                     "<li>Auto-renewing subscriptions renew automatically unless cancelled at "
                     "least 24 hours before the end of the current period.</li>"
                     "<li>Your account is charged for renewal within 24 hours prior to the end of "
                     "the current period, at the price of the plan you chose.</li>"
                     "<li>You can manage or cancel a subscription in Settings → your name → "
                     "Subscriptions on your device.</li>"
                     "<li>Any unused portion of a free trial is forfeited when you buy a "
                     "subscription.</li>"
                     "<li>A lifetime purchase is a one-time payment and does not renew.</li>"
                     "</ul>")
        parts.append(f"<p><strong>Free tier:</strong> {E(iap['free'])} "
                     f"<strong>Paid tier adds:</strong> {E(iap['unlocks'])}</p>")
        parts.append("<p>Refunds are handled by Apple under the App Store Terms of Service; "
                     "I cannot issue them directly.</p>")
    else:
        parts.append("<h2>Price</h2>")
        parts.append(f"<p>{name} is free and contains no in-app purchases, no subscriptions "
                     "and no advertising.</p>")

    if app["category"] in ("Medical", "Health & Fitness"):
        parts.append("<h2>Not medical advice</h2>")
        parts.append(f"<p>{name} is a tracking and information tool. It is <strong>not</strong> "
                     "a medical device, and nothing it shows is medical advice, diagnosis or "
                     "treatment. Figures it displays are estimates. Always speak to a qualified "
                     "healthcare professional before making decisions about your health, "
                     "medication or treatment, and never disregard professional advice because "
                     "of something you read in this app.</p>")

    parts.append("<h2>Your content</h2>")
    parts.append("<p>Anything you put into the app stays yours. I claim no ownership of it and, "
                 "as described in the privacy policy, I have no access to it. Keeping your own "
                 "backups is your responsibility. The app's export feature is free and always "
                 "will be.</p>")

    parts.append("<h2>Acceptable use</h2>")
    parts.append("<p>Don't use the app unlawfully, and don't try to disrupt or compromise it or "
                 "the devices of others.</p>")

    parts.append("<h2>Disclaimer and liability</h2>")
    parts.append("<p>The app is provided \"as is\", without warranties of any kind to the extent "
                 "permitted by law. I do not warrant that it will be uninterrupted or error-free. "
                 "To the maximum extent permitted by law, I am not liable for indirect or "
                 "consequential loss, or for loss of data, arising from your use of the app.</p>")

    parts.append("<h2>Apple</h2>")
    parts.append("<p>Apple is not a party to these terms and has no responsibility for the app. "
                 "Apple is, however, a third-party beneficiary of these terms and may enforce "
                 "them against you. Any claim relating to the app should be directed to me, not "
                 "to Apple.</p>")

    parts.append("<h2>Changes and termination</h2>")
    parts.append("<p>These terms may be updated; the current version always lives at this "
                 "address. Your licence ends if you stop complying with these terms, at which "
                 "point you should delete the app.</p>")

    parts.append("<h2>Governing law</h2>")
    parts.append("<p>These terms are governed by the laws of India, without regard to conflict "
                 "of law rules.</p>")

    return "".join(parts)


def build_legal(app):
    for kind, body, fname in (
        ("Terms of Use", terms_page(app), "terms.html"),
        ("Privacy Policy", privacy_page(app), "privacy.html"),
    ):
        out = [legal_head(app, kind)]
        out.append(f"""<main id="main" class="legal wrap">
  <div class="prose">
    <p class="label">{E(app["name"])}</p>
    <h1>{E(kind)}</h1>
    <p class="updated">Last updated {UPDATED}</p>
    {body}
    <div class="contact-box">
      <p style="margin:0"><strong>Contact.</strong> Questions about this document, or about
      {E(app["name"])}: <a href="mailto:{E(SITEINFO['email'])}" style="border-bottom:1px solid var(--rule-strong)">{E(SITEINFO['email'])}</a></p>
    </div>
  </div>
</main>""")
        out.append(foot(js="../../assets/site.js"))
        write(f"{SITE}/legal/{app['slug']}/{fname}", "".join(out))


def build_legal_index():
    """An unlisted index of every legal URL — for pasting into App Store Connect
    and into each app's paywall. Nothing on the site links here."""
    rows = []
    for app in APPS:
        s = app["slug"]
        rows.append(
            f'<tr><td style="padding:.5rem 1.5rem .5rem 0;white-space:nowrap">{E(app["name"])}</td>'
            f'<td style="padding:.5rem 1.5rem .5rem 0"><a href="{s}/terms.html">{DOMAIN}/legal/{s}/terms.html</a></td>'
            f'<td style="padding:.5rem 0"><a href="{s}/privacy.html">{DOMAIN}/legal/{s}/privacy.html</a></td></tr>')
    out = [head("Legal index", "Unlisted index of app terms and privacy policies.",
                css="../assets/site.css", js="../assets/site.js", noindex=True)]
    out.append(f"""<main id="main" class="legal wrap">
  <div class="prose" style="max-width:none">
    <p class="label">Unlisted</p>
    <h1>Legal index</h1>
    <p>Every app's Terms of Use and Privacy Policy. Not linked from anywhere on the site.</p>
    <div style="overflow-x:auto">
    <table style="border-collapse:collapse;font-size:.8125rem;font-family:var(--mono)">
      <tbody>{''.join(rows)}</tbody>
    </table>
    </div>
  </div>
</main>""")
    out.append(foot(js="../assets/site.js"))
    write(f"{SITE}/legal/index.html", "".join(out))


def build_legacy():
    """Keep the URLs the old site published alive.

    /privacy.html is almost certainly the Privacy Policy URL registered in App Store
    Connect for the two live apps, and /watermyplant.html was that app's page. Breaking
    either would break a live listing, so both keep working.
    """
    rows = "".join(
        f'<li><a href="legal/{a["slug"]}/privacy.html">{E(a["name"])}</a></li>' for a in APPS)
    out = [head("Privacy", "Privacy policies for every app.",
                noindex=True)]
    out.append(f"""<main id="main" class="legal wrap">
  <div class="prose">
    <h1>Privacy</h1>
    <p>Every app I publish keeps your content on your device or in your own iCloud.
    Each app has its own policy, because each one touches different data:</p>
    <ul>{rows}</ul>
    <div class="contact-box">
      <p style="margin:0"><strong>Contact.</strong>
      <a href="mailto:{E(SITEINFO['email'])}" style="border-bottom:1px solid var(--rule-strong)">{E(SITEINFO['email'])}</a></p>
    </div>
  </div>
</main>""")
    out.append(foot())
    write(f"{SITE}/privacy.html", "".join(out))

    redirect = ("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">"
                "<meta name=\"robots\" content=\"noindex\">"
                "<meta http-equiv=\"refresh\" content=\"0; url=apps/watermyplants.html\">"
                "<link rel=\"canonical\" href=\"" + DOMAIN + "/apps/watermyplants.html\">"
                "<title>WaterMyPlants</title></head><body>"
                "<p>Moved to <a href=\"apps/watermyplants.html\">/apps/watermyplants.html</a>.</p>"
                "</body></html>\n")
    write(f"{SITE}/watermyplant.html", redirect)


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  {os.path.relpath(path, SITE)}")


def main():
    for d in ("apps", "legal"):
        if os.path.isdir(f"{SITE}/{d}"):
            shutil.rmtree(f"{SITE}/{d}")
    print("Generating:")
    build_index()
    for app in APPS:
        build_app(app)
        build_legal(app)
    build_legal_index()
    build_legacy()

    with open(f"{SITE}/robots.txt", "w") as f:
        f.write(f"User-agent: *\nDisallow: /legal/\n\nSitemap: {DOMAIN}/sitemap.xml\n")
    urls = [f"{DOMAIN}/"] + [f"{DOMAIN}/apps/{a['slug']}.html" for a in APPS]
    with open(f"{SITE}/sitemap.xml", "w") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n'
                '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                + "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls)
                + "</urlset>\n")
    print(f"\n{len(APPS)} apps · {len(APPS) * 2 + 1} unlisted legal pages")


if __name__ == "__main__":
    main()
