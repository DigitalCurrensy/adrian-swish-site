# Architecture

This repo is a Next.js 16 shell around one production HTML document.

It is not a CMS. It is not an API. It is not a database app.

## Request path

Browser → `app/layout.tsx` → `app/[route]/page.tsx` → `ExactHtmlFrame` → `/exact/adrian-swish-website-code.html`

Every App Router page renders the same iframe so pretty URLs do not 404. The in-page command nav moves a visitor between systems.

## Stack

- Next.js 16.2.10, React 19.2.4, TypeScript 5, Tailwind 4, pnpm
- Host: Vercel
- Production domain: **https://adrianswish.xyz** (www canonical)
- Data: none. No Prisma, Drizzle, Postgres, Firestore, Redis
- Env: none required

## Routes

All of these render `ExactHtmlFrame`:

`/` `/about` `/ai-suite` `/contact` `/cookie-notice` `/investments` `/media` `/mixtape-vault` `/newsletter` `/nft-gallery` `/panels` `/philanthropy` `/press` `/privacy-policy` `/projects` `/services` `/shop` `/terms-of-service` `/video-games`

Keep the routes. They are the stable URL surface for the rewrite.

## Components

- `components/site/ExactHtmlFrame.tsx` — production renderer
- `components/site/SiteShell.tsx` — typed command shell, not wired
- `components/site/MediaCard.tsx` — typed media card, not wired

## Assets

- `public/exact/` — served. Production HTML + campaign art
- `public/brand/` — served. Identity mark (CryptoPunk) and share card
- `public/og.jpg` — Open Graph image
- `public/assets/imported/` — served. Imported stills
- `docs/brand/` — README / docs identity (same CryptoPunk)
- `_incoming/full-site-code/` — not served. Duplicate of `public/exact/`

Pipeline today: Git → Vercel static. JP2 scans are not browser-safe. Do not delete `_incoming/` in a docs PR.

## Data honesty

Vault, NFT gallery, shop, and games are static HTML sections. Booking is live on KiwiLaunch. Label IQ AI is live at https://app.labeliq.ai. Digital Currensy is live at https://www.digitalcurrensy.com. The U is live at https://www.theubasketballprepacademy.com.

## Later rewrite

Replace `ExactHtmlFrame` per-route with `SiteShell` + section modules. Move large campaign art off git. Do not invent a database for static copy.
