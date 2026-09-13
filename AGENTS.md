# Portfolio operating notes

This repository builds a static Astro site for `nshiffer.github.io` and deploys
through the GitHub Pages workflow in `.github/workflows/deploy.yml`. GitHub owns
the `github.io` domain, so this site remains on Pages rather than using a
Cloudflare custom-domain Worker.

Before pushing, run `npm ci` and `npm run build` locally. The hosted workflow
only installs the lockfile and runs the production build before uploading the
static artifact; it does not run browser checks, end-to-end checks, audits, or a
second build. Canceling superseded runs avoids spending build minutes on stale
commits.

SEO files (`robots.txt`, `sitemap.xml`, `llms.txt`, and `og-image.png`) live in
`public/`. Keep the portfolio's canonical URL, structured data, and project
links aligned with the live product domains. The 404 page is intentionally
`noindex`.
