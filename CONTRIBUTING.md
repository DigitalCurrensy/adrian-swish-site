# Contributing

This is the public founder site for Adrian Swish. Keep changes small, typed, and honest about what the site actually is.

## Ground rules

- The live page is `public/exact/adrian-swish-website-code.html`.
- Every `app/*/page.tsx` currently iframes that file through `ExactHtmlFrame`. Do not invent per-route React pages unless you are doing the planned rewrite.
- `components/site/SiteShell.tsx` and `components/site/MediaCard.tsx` are the rewrite primitives. They are not production yet.
- Do not add a database, CMS, or API client to document static HTML sections.
- Do not commit secrets. This app has no required env vars.
- Do not delete `_incoming/` in a drive-by cleanup. That is a separate hygiene pass.
- Use the real socials: [@IAmAdrianSwish](https://x.com/IAmAdrianSwish), [@iamadrianswish](https://instagram.com/iamadrianswish), [swish@digitalcurrensy.com](mailto:swish@digitalcurrensy.com).

## Local loop

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Node 20+ and pnpm.

## Pull requests

1. Branch from `main`.
2. One concern per PR: copy, wrapper, docs, or rewrite — not all four.
3. If you change visitor-facing copy, say so in the PR body.
4. If you change `app/layout.tsx` metadata, include the new title and description in the PR body.
5. Screenshots belong in `public/exact/` with web-safe names. Do not add filenames that contain unicode thin spaces.

## What not to do

- Do not treat vault / shop / NFT gallery as live data sources.
- Do not copy typo'd handles out of the HTML dump.
- Do not present Digital Currensy as a token sale or exchange. The company site is [digitalcurrensy.com](https://www.digitalcurrensy.com).
