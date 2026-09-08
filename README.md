# alanqiao-portfolio

Personal portfolio site — single-page, dark mode. Built with React + Vite.

## Content

All copy lives in one place: [`src/data/content.js`](src/data/content.js). Edit that file to update
your bio, experience, projects, or skills — no need to touch components.

A couple of things worth double-checking there:
- `profile.linkedin` is a placeholder — swap in your real LinkedIn URL.
- `profile.bio` is a draft — rewrite it in your own voice whenever you're ready.

## Develop

```bash
npm install
npm run dev
```

## Deploy

### Vercel (recommended — zero config)
1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Vite; no settings needed.

### GitHub Pages
1. In `vite.config.js`, add `base: '/<your-repo-name>/'` inside `defineConfig`.
2. `npm run build`, then deploy the `dist/` folder — either with the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, or a GitHub Actions workflow that
   builds and publishes `dist/` to the `gh-pages` branch.
