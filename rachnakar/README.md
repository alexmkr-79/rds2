# Rachnakar Design Studio

Marketing site for **Rachnakar Design Studio** — a CNC design and manufacturing
studio based in Pune, Maharashtra, India.

This is a standalone **Vite + React 19 + TypeScript + Tailwind CSS v4** single
page application. It was extracted from a Replit pnpm monorepo and converted
into a clean, independent project with no Replit tooling, no workspace/catalog
dependencies, and no backend/API server — it is a fully static site.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion + GSAP for animation
- Radix UI + shadcn-style components
- wouter for routing
- react-hook-form + zod for the contact form (submits via WhatsApp deep link)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

Type-check the project (does not block `npm run build`, which uses esbuild/Vite directly):

```bash
npm run typecheck
```

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** set the `NODE_VERSION` environment variable to `22` (or add a `.nvmrc`/`.node-version`; this repo already ships a `.nvmrc` set to `22`).
4. Deploy. Cloudflare Pages will automatically pick up `public/_headers` and `public/_redirects` from the build output (Vite copies everything in `public/` into `dist/`).

### Option B — Wrangler CLI

```bash
npm install -g wrangler   # or use npx
npm run build
wrangler pages deploy dist
```

A minimal `wrangler.toml` is included with `pages_build_output_dir = "dist"`.

## What's included for production

- **SPA routing fallback** — `public/_redirects` rewrites all paths to `index.html` (200) so deep links work with client-side routing via `wouter`.
- **Security headers** — `public/_headers` sets `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`, plus long-lived immutable caching for hashed assets and images.
- **SEO** — descriptive `<title>`/meta description, Open Graph + Twitter Card tags, a JSON-LD `LocalBusiness` block, `robots.txt`, and `sitemap.xml`.
- **Image optimization** — product/portfolio photos were converted from unoptimized PNG (~13 MB total) to WebP (~0.8 MB total) with no visible quality loss, and the oversized source logo (25,924 × 14,258 px, 3 MB) was downscaled to a crisp 1091 × 600 PNG (~80 KB) with transparency preserved.
- **Code-splitting** — `vite.config.ts` separates React and animation libraries (Framer Motion, GSAP) into their own vendor chunks.

### Before you go live

The canonical URL, Open Graph URL/image, Twitter tags, and JSON-LD `url`/`image`
fields in `index.html`, plus the URLs in `public/robots.txt` and
`public/sitemap.xml`, currently point to a placeholder domain
(`https://www.rachnakardesign.com/`). Update these to your real production
domain before deploying.

If you serve the site from a custom domain other than the one above, also
double check the `Content-Security-Policy` in `public/_headers` — it currently
only allows resources from `'self'` plus Google Fonts, which is correct for
this domain-agnostic setup and needs no change unless you add new third-party
scripts/styles/fonts.

## Project structure

```
├── public/              # Static assets copied as-is to dist/ (images, favicon, _headers, _redirects, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Page sections (Hero, Products, Portfolio, Contact, etc.) + shadcn-style UI primitives in components/ui
│   ├── data/            # Site copy/content (products, portfolio, services, contact info, etc.)
│   ├── hooks/           # Shared hooks (toast, mobile breakpoint)
│   ├── lib/             # Utilities (className merge helper)
│   ├── pages/           # Route-level pages
│   ├── utils/           # WhatsApp deep-link builder
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Tailwind v4 entry + design tokens/theme
├── index.html
├── vite.config.ts
├── tsconfig.json
├── wrangler.toml
└── package.json
```

## Notes on the conversion from the Replit monorepo

- Removed: `pnpm-workspace.yaml`/catalog dependency, the `api-server` and all
  other workspace packages, `@replit/vite-plugin-*` plugins, the `REPL_ID`/
  `PORT`/`BASE_PATH` environment variable requirements, and the
  `@workspace/api-client-react` and `@tanstack/react-query` dependencies
  (verified unused by the frontend — the contact form submits via a WhatsApp
  `wa.me` link, not an API call).
- All `catalog:` and `workspace:*` version specifiers in `package.json` were
  replaced with the real pinned versions from the monorepo's catalog.
- UI, animations (Framer Motion + GSAP), responsive layout, and the WhatsApp
  integration (`src/utils/whatsapp.ts`, used by the Navbar, hero CTAs, and the
  contact form) are unchanged.
