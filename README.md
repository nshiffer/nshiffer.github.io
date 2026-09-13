# nshiffer.github.io

Nick Shiffer's portfolio, built with Astro and deployed to GitHub Pages at
<https://nshiffer.github.io>.

## Development

```sh
npm ci
npm run dev
```

Run `npm run build` before pushing. The GitHub Actions workflow performs the
same lockfile install and static build, then publishes `dist/`. It intentionally
keeps deployment checks minimal: browser, end-to-end, audit, and duplicate-build
steps run locally or separately rather than consuming Pages build minutes.
