# Relume → production

The production landing page is built in [`../relume/`](../relume/) — a Vite + React 18 + TypeScript + Tailwind v3 app on Relume components — and deploys **directly to Vercel. No Webflow, no Next.js.**

## Stack

- `@relume_io/relume-ui` (primitives) + `@relume_io/relume-tailwind` (preset)
- Section components (Hero, Navbar, Pricing, FAQ...) are **copy-pasted from relume.io** into `relume/src/` — the npm package ships only primitives, not sections.
- Imports of fresh Relume exports land in `import/` first, then get wired into `relume/src/`.

## What stays in this repo

| Folder | Role |
|--------|------|
| `copy/` | Final Polish copy per ad variant + `_shared.md` + `_executive-summary.md` |
| `personas/` | Decision-maker briefs for content |
| `relume/` | Production page (Vite + React + Relume) → Vercel |
| `wireframes/`, `designs/` | B&W structure + visual explorations (reference only) |
| `import/` | Raw Relume / Claude Design exports before wiring into `relume/` |

## Wiring a Relume export into `relume/`

1. Drop the export under `import/<name>/`.
2. Copy its sections into `relume/src/` and wire `index.jsx` (or a route) into `main.tsx`.
3. Add missing deps the export uses (`framer-motion`, `react-icons`, `clsx`).
4. Relume exports sometimes use `clsx` without importing it — add the import.
5. `npm run build` + screenshot at a realistic viewport (1440×900, fullPage) — a giant window breaks `100vh`-based heroes.
6. Replace content with [`../copy/`](../copy/), run `/humanize`, swap placeholder logos/quotes/`© Relume` before go-live.

## Deploy

Vercel project → Root Directory `relume/`, framework **Vite**, build `npm run build`, output `dist`.
