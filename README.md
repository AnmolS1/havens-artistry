# Haven's Artistry — Next.js

> _made by hand and with heart_ 🌿

A cottagecore-maximalist handmade artisan shop, built with **Next.js (App Router)** and
configured for **static export** so it deploys cleanly to **Cloudflare Pages**.

## Stack

- Next.js 16 (App Router)
- React 18
- **Static export** (`output: 'export'` in `next.config.js`) — no server runtime required
- **CSS Modules** for component-scoped styling, with a thin `app/globals.css` for
  design tokens, base typography, decorative utilities, and the shared keyframes
- **`next/font`** self-hosts Playfair Display, Cormorant Garamond & Nunito (no
  render-blocking Google Fonts `@import`)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs a fully static site to ./build
```

`next build` with `output: 'export'` writes the static site to `build/`.

## Deploy to GitHub Pages

The repo is already wired for Pages:

- `public/.nojekyll` ships to `out/.nojekyll` so GitHub serves Next's `_next/`
  asset folder (Jekyll otherwise strips underscore-prefixed paths).
- `app/not-found.jsx` is exported as `404.html`, which Pages serves automatically.

**User/org page or custom domain** (served from `/`): just publish the `out/`
folder — no extra config.

**Project page** (served from `https://you.github.io/<repo>`): set the base path
at build time so links and assets resolve under the sub-path:

```bash
NEXT_PUBLIC_BASE_PATH="/<repo>" npm run build
```

`next.config.js` reads that env var and applies `basePath` / `assetPrefix`, and
`lib/images.js` prefixes image paths with it automatically.

## Deploy to Cloudflare Pages

Connect the repo in the Cloudflare Pages dashboard and use:

| Setting            | Value         |
| ------------------ | ------------- |
| Framework preset   | Next.js (Static HTML Export) |
| Build command      | `npm run build` |
| Build output dir   | `build`         |

No environment variables are required for the placeholder build.

## Adding your photos

Every product / collection / studio image is a **decorative placeholder** until
you add a real photo — the layout always looks finished in the meantime.

1. Drop image files into the matching folder under `public/images/`
   (see `public/images/README.md` for exact filenames).
2. Open `lib/images.js` and set the matching entry to the file path, e.g.
   `stickers: '/images/collections/stickers.jpg'`.

The framed placeholder is swapped for your photo automatically (and falls back
to the placeholder if a path is set but the file is missing).

## Project structure

```
app/
  layout.jsx            Root layout — next/font, providers, Header, Footer
  globals.css           Tokens, reset, base type, keyframes, decorative utilities
  not-found.jsx         Branded 404 (exported as 404.html)
  page.jsx              Home
  collections/          Collections
  shop/                 Shop All (filterable grid)
  custom-order/         Custom Order (dynamic form + Fairy Express)
  about/                About
  faqs/                 FAQs (accordion)
  terms/                Terms & Conditions
  privacy/              Privacy Policy
  checkout/             Checkout (payment placeholders)
components/
  Header / Footer / NewsletterForm
  Decor                 Inline-SVG spiral / branch / bloom / star / sprig / icons
  HeroDeco              The animated hero "garden"
  Divider / Button / Placeholder / Panel / Badge   (UI primitives)
  ImgFill               Photo overlay for placeholders (with graceful fallback)
  ProductCard / CollectionCard / ShopGrid
  CustomOrderForm / FaqAccordion / CheckoutClient
  CartProvider          Cart context (localStorage) + useCart hook
  RevealOnScroll        IntersectionObserver reveal-on-scroll
lib/
  decor.js              Spiral path + nav config
  catalog.js            Collections, products (with ids), custom-order timelines
  images.js             Image manifest — maps photo slots to /public/images files
public/
  .nojekyll             Lets GitHub Pages serve Next's _next/ folder
  images/               Drop your photos here (see images/README.md)
```

## Payments

The checkout is a **visual placeholder only** — no real payment logic is wired.
Integration points are clearly marked in `components/CheckoutClient.jsx`:

- `// TODO: Stripe integration`
- `// TODO: PayPal/Venmo integration`
