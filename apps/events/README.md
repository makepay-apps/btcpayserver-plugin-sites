# MakePay Event Tickets website

Presentation and documentation site for the MakePay Event Tickets BTCPay Server plugin.

## Local development

From the monorepo root:

```bash
npm install
npm run dev:events
```

The app is served at `http://localhost:3000`. A production check is available with:

```bash
npm run build:events
npm run typecheck --workspace @makepay/events-site
```

## Vercel

Create a Vercel project with this repository and set **Root Directory** to `apps/events`. Vercel should detect Next.js; no environment variables are required. The production domain is `events.makepay.io`.

The app uses the shared `@makepay/site-kit` workspace package, so the repository root and workspace files must be included in the deployment checkout.

## Content and assets

- Documentation lives in `content/docs/*.mdx`. Navigation and search metadata come from each file's frontmatter.
- Product screenshots in `public/screenshots` are copied from the plugin's existing `.design-qa` evidence.
- Favicons and web-app icons are the existing MakePay public brand assets.
