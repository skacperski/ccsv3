# Relume → production (planned)

The Next.js `microsite/` app was removed. Production will be built from scratch in [Relume](https://www.relume.io/).

## What stays in this repo

| Folder | Role |
|--------|------|
| `copy/` | Final Polish copy per ad variant + `_shared.md` |
| `personas/` | Decision-maker briefs for content |
| `wireframes/` | B&W structure + variant simulator (reference) |
| `designs/` | Visual explorations (reference, not production) |
| `prompts/` | Agent workflows for copy and HTML prototypes |

## What not to add back

- Next.js, React app, `package.json` at repo root for a site builder
- Tailwind build pipelines for the main product
- Storybook

## Handoff to Relume / Webflow

1. Use `copy/_shared.md` + variant files for section text.
2. Use `wireframes/wireframe.html` for section order and dynamic variant logic (message match).
3. Map UTM → content in Webflow (or landing logic) using the 9 variants table in `CLAUDE.md`.
4. Replace placeholder logos, quotes, and phone before go-live.
