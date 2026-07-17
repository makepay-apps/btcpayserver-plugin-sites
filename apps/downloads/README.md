# MakePay Digital Products website

Product presentation and operator documentation for the open-source [MakePay Digital Products BTCPay Server plugin](https://github.com/makepay-io/btcpayserver-digital-products).

## Local development

From the monorepo root:

```bash
npm install
npm run dev:downloads
```

The site runs at `http://localhost:3000`. Content lives in `content/docs`; each MDX file requires `title`, `description`, `section`, and numeric `order` frontmatter.

## Vercel

- Project root: `apps/downloads`
- Framework: Next.js
- Production domain: `downloads.makepay.io`
- Build command: `npm run build`
- Output: Next.js default
- Required environment variables: none

The app uses the shared `@makepay/site-kit` workspace package. Keep access to files outside the project root enabled when configuring the Vercel monorepo project.

## Verification

```bash
npm run typecheck --workspace @makepay/downloads-site
npm run build --workspace @makepay/downloads-site
```
