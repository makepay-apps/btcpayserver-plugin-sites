# MakePay BTCPay Server plugin sites

Documentation and product sites for MakePay's open-source BTCPay Server plugins.

## Workspaces

- `apps/events` — Event Tickets site for `events.makepay.io`
- `apps/downloads` — Digital Products site for `downloads.makepay.io`
- `packages/makepay-site-kit` — shared brand, landing, documentation, and SEO UI

Each app is an independent Next.js deployment. In Vercel, create one project per app and set the project Root Directory to the matching `apps/*` folder. Vercel detects the repository workspace and installs shared packages from the repository root.

## Local development

```bash
npm install
npm run dev:events
npm run dev:downloads
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```
