# The site is static: no build step, no runtime dependencies. Caddy serves it and
# nothing else runs. The generator in _build/ is excluded — it is a local authoring
# tool, not part of what gets served.
FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html privacy.html watermyplant.html robots.txt sitemap.xml /srv/
COPY assets /srv/assets
COPY apps /srv/apps
COPY legal /srv/legal

EXPOSE 80
