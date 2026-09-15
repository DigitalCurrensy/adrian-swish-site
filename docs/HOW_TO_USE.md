# How to use the Adrian Swish site

Live site: [adrian-swish-site.vercel.app](https://adrian-swish-site.vercel.app)

Two modes: visitor and developer.

---

## Visitor walkthrough

Open the live site. That is the product.

### 1. Land on Command Center

Open [adrian-swish-site.vercel.app](https://adrian-swish-site.vercel.app).

You should see the founder hub and the command nav: Home, AI, Shop, Games, Contact, Book a Call.

The real document is `/exact/adrian-swish-website-code.html`. Pretty Next URLs all load that same document.

### 2. Scroll the systems

| System | Section | Do this |
| --- | --- | --- |
| 00 | The Network | Read how music, AI, sports, and capital connect |
| 01 | Origin Protocol | Background and operating thesis |
| 02 | Strategic Services | Decide if you are hiring consulting, campaigns, or a build |
| 03 | AI Command Stack | Review the stack, then open [app.labeliq.ai](https://app.labeliq.ai) for the live product |
| 04 | Strategic Holdings | DCI, Label IQ AI, The U Prep, Sixth Man |
| 05 | The Vault | Campaign and mixtape record |
| 06 | Media Universe | Books and publications |
| 07 | Game Arcade | Play the Remix games |
| 08 | Shop | Digital products |
| 09 | Chrome Ledger | NFT / collectible stills |
| 10 | Impact Ledger | Philanthropy record |
| 11 | Stages & Signals | Talks and panels |
| 12 | Press Room | Coverage |
| 13 | The Swish Signal | Newsletter |
| 14 | Executive Intake | Contact |

### 3. Open a live holding when you need the product

| Holding | URL |
| --- | --- |
| Digital Currensy Inc. | [digitalcurrensy.com](https://www.digitalcurrensy.com) |
| Label IQ AI | [app.labeliq.ai](https://app.labeliq.ai) |
| The U Basketball Prep Academy | [theubasketballprepacademy.com](https://www.theubasketballprepacademy.com) |
| Sixth Man | Request access from contact |

Artist distribution, 80/20 splits, and the apply form live on the company site. They are not inside this repo.

### 4. Book or write

- Book: [adrianswish.book.kiwilaunch.com](https://adrianswish.book.kiwilaunch.com/)
- Email: [swish@digitalcurrensy.com](mailto:swish@digitalcurrensy.com)
- Press: same inbox, subject line `PRESS`

### 5. Watch the tapes

The live site is the interactive walkthrough. These videos are the recorded context:

[![Digital Currensy overview](https://img.youtube.com/vi/T4005q3Xi4I/maxresdefault.jpg)](https://www.youtube.com/watch?v=T4005q3Xi4I)

- [Digital Currensy overview](https://www.youtube.com/watch?v=T4005q3Xi4I)
- [Label IQ AI](https://www.youtube.com/watch?v=pLtealaMUD8)
- [UNRESTRICTED INTERVIEW: ADRIAN SWISH](https://www.youtube.com/watch?v=f2mZS0D1xVc)

---

## What each click does

| You click | What it does |
| --- | --- |
| **Book a Call** | Opens KiwiLaunch scheduling |
| **AI** | Jumps to the AI Command Stack on this page |
| **Shop** | Jumps to digital products |
| **Games** | Jumps to the arcade |
| **Contact** | Jumps to intake / email |
| **Digital Currensy** | Leaves this site for the company platform |
| **Label IQ AI** | Leaves this site for the live AI studio |

Pretty URLs on this Next app (`/about`, `/ai-suite`, `/shop`, `/video-games`) all load the same HTML document. Use the in-page nav to move between systems.

---

## Developer walkthrough

### Run locally

Node 20+ and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/DigitalCurrensy/adrian-swish-site.git
cd adrian-swish-site
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `pnpm dev` | Next dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |

No `.env` file. No database URL. No API keys.

### What to edit

| You want to change | Edit this |
| --- | --- |
| What visitors see | `public/exact/adrian-swish-website-code.html` |
| The iframe wrapper | `components/site/ExactHtmlFrame.tsx` |
| Browser tab title / SEO | `app/layout.tsx` |
| A pretty URL that should not 404 | `app/<route>/page.tsx` — keep rendering `ExactHtmlFrame` until the rewrite |
| Docs | `README.md`, `docs/HOW_TO_USE.md`, `docs/ARCHITECTURE.md` |

Do not add a database to document features that are static HTML.

### Architecture in one paragraph

Every App Router page renders `ExactHtmlFrame`, which iframes `/exact/adrian-swish-website-code.html`. `SiteShell` and `MediaCard` exist and are typed, but they are not wired to the live routes. That is the Next rewrite, not the current production path. Details: [ARCHITECTURE.md](ARCHITECTURE.md).

### Deploy

Push to `main`. Vercel builds from this repo. Production URL: [adrian-swish-site.vercel.app](https://adrian-swish-site.vercel.app).

---

## Socials that are correct

Use these. Do not copy typo'd handles out of the HTML dump.

- Instagram: [@iamadrianswish](https://instagram.com/iamadrianswish)
- X: [@IAmAdrianSwish](https://x.com/IAmAdrianSwish)
- LinkedIn: [linkedin.com/in/adrianswish](https://www.linkedin.com/in/adrianswish/)
- Email: [swish@digitalcurrensy.com](mailto:swish@digitalcurrensy.com)
