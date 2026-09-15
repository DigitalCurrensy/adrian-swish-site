# Architecture — adrian-swish-site

Honest map of what this repository is. Read this before adding a database, a CMS, or a second copy of the HTML.

---

## One-sentence model

Next.js 16 serves a fullscreen iframe of `public/exact/adrian-swish-website-code.html`. That HTML file is the product.

```
Browser
  → app/[route]/page.tsx
    → ExactHtmlFrame
      → iframe src=/exact/adrian-swish-website-code.html
```

---

## Stack

| Layer | What is actually in the repo |
| --- | --- |
| Framework | Next.js `16.2.10` (App Router) |
| UI | React `19.2.4` + TypeScript 5 + Tailwind 4 |
| Package manager | pnpm (`pnpm-lock.yaml` + `pnpm-workspace.yaml`) |
| Hosting | Vercel — [adrian-swish-site.vercel.app](https://adrian-swish-site.vercel.app) |
| Database | **None** |
| CMS | **None** |
| Auth | **None** |
| Env / secrets | **None required** |

`package.json` scripts: `dev`, `build`, `start`, `lint`.

---

## Request path

Every public route renders the same component: `components/site/ExactHtmlFrame.tsx`.

Routes that exist so URLs do not 404:

`/`, `/about`, `/ai-suite`, `/contact`, `/cookie-notice`, `/investments`, `/media`, `/mixtape-vault`, `/newsletter`, `/nft-gallery`, `/panels`, `/philanthropy`, `/press`, `/privacy-policy`, `/projects`, `/services`, `/shop`, `/terms-of-service`, `/video-games`

Each `app/<route>/page.tsx` is a stub that imports `ExactHtmlFrame`. In-page navigation is hash anchors inside the HTML (`#ai-suite`, `#vault`, `#contact`).

---

## What is live vs static

| Feature on the site | Where the data lives | Live? |
| --- | --- | --- |
| Origin / bio | Hardcoded HTML | Static |
| AI Command Stack | Hardcoded catalog + outbound links | Static page; Label IQ is live elsewhere |
| Holdings cards | Hardcoded cards + external URLs | Static |
| Mixtape Vault (21 projects) | HTML + images in `public/exact/` | Static |
| Game Arcade | HTML + Remix game links | Static page; games hosted off-repo |
| Shop | HTML catalog | Static — not a checkout |
| Chrome Ledger NFTs | Static images | Static — not an on-chain indexer |
| Book a call | [KiwiLaunch](https://adrianswish.book.kiwilaunch.com/) | Live, not in this repo |
| Digital Currensy | [digitalcurrensy.com](https://www.digitalcurrensy.com) | Separate repo |
| Label IQ AI | [app.labeliq.ai](https://app.labeliq.ai) | Separate product |
| The U Prep | [theubasketballprepacademy.com](https://www.theubasketballprepacademy.com) | Separate repo |

This repo has no application database, CMS, or auth.

---

## Components

| File | Status |
| --- | --- |
| `components/site/ExactHtmlFrame.tsx` | Production renderer |
| `components/site/SiteShell.tsx` | Typed, unused — intended Next rewrite |
| `components/site/MediaCard.tsx` | Typed, unused — intended Next rewrite |

---

## Asset layout

| Path | Served? | Role |
| --- | --- | --- |
| `public/exact/` | Yes | Production HTML + campaign art |
| `public/assets/imported/` | Yes | Second copy of many stills |
| `_incoming/full-site-code/` | No | Duplicate of `public/exact/` |

JP2 scans in the tree are not browser-safe. Convert before any rewrite.

Current pipeline: Git → Vercel static.

---

## Known product bugs (do not paper over)

1. Hero counters in the HTML have shown placeholder zeros. Do not publish those numbers as facts.
2. Some social URLs inside the HTML look typo'd (`iamadrianswiswish`). Canonical handles: Instagram `@iamadrianswish`, X `@IAmAdrianSwish`.
3. Duplicate multi-MB binaries in `_incoming/` and `public/exact/`.
4. Pretty Next routes do not deep-link to the matching hash inside the iframe.

This docs pass does not delete `_incoming/` and does not rewrite the 6.9 MB HTML file.
