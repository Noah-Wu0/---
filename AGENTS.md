# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 14 (App Router) static marketing website (`xichuanshuzi-website`). No backend, database, or external services are required.

- Package manager: npm (`package-lock.json`). Node 22 works fine (Next 14.2.14).
- Standard scripts live in `package.json`: `dev`, `build`, `start`, `lint`.
- Dev server: `npm run dev` serves on `http://localhost:3000`. Run it under a long-lived tmux session, not a one-shot background job.
- Lint requires an ESLint config to run non-interactively. `.eslintrc.json` (extends `next/core-web-vitals`) is committed for this; without it `next lint` prompts interactively and hangs.
- All routes are statically prerendered: `/`, `/solutions`, `/cases`, `/about`, `/contact`.
- `npm ci` reports npm audit vulnerabilities in transitive deps; these are non-blocking for local dev.
