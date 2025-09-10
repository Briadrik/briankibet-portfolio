Deployment: GitHub Pages (automatic)

This repository includes a GitHub Actions workflow that builds the site on pushes to `main` and publishes the `dist/` directory to GitHub Pages.

How it works
1. Push to `main` triggers `.github/workflows/deploy_pages.yml`.
2. The action installs dependencies, runs `npm run build`, and publishes `dist/` to GitHub Pages.

Manual steps
- Enable GitHub Pages in the repository settings (if required) and choose the 'gh-pages' or the 'Pages' deployment created by the action.

Local checks
- `node scripts/check-image-size.js` will verify your profile image is <= 200KB before pushing.

To change hosts
- See earlier instructions for Vercel/Netlify/Cloudflare if you prefer those hosts.
