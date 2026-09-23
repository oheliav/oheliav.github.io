# oheliav.github.io

Personal portfolio site for Eliav Ohaion — built with Next.js, deployed to GitHub Pages via static export.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with `next build` (static export) and publishes it to GitHub Pages.
