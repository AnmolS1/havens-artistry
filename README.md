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

## Deploy to Cloudflare Pages

Connect the repo in the Cloudflare Pages dashboard and use:

| Setting            | Value         |
| ------------------ | ------------- |
| Framework preset   | Next.js (Static HTML Export) |
| Build command      | `npm run build` |
| Build output dir   | `build`         |

No environment variables are required for the placeholder build.

## Project structure

```
app/
  layout.jsx            Root layout — fonts, providers, Header, Footer
  globals.css           Tokens, reset, base type, keyframes, decorative utilities
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
  ProductCard / CollectionCard / ShopGrid
  CustomOrderForm / FaqAccordion / CheckoutClient
  CartProvider          Cart context (localStorage) + useCart hook
  RevealOnScroll        IntersectionObserver reveal-on-scroll
lib/
  decor.js              Spiral path + nav config
  catalog.js            Collections, products, custom-order timelines
```

## Payments

The checkout is a **visual placeholder only** — no real payment logic is wired.
Integration points are clearly marked in `components/CheckoutClient.jsx`:

- `// TODO: Stripe integration`
- `// TODO: PayPal/Venmo integration`0
