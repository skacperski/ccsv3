# relume — sandbox wireframe (Relume + React + Tailwind)

Produkcyjna strona NIS2/KSC budowana na komponentach Relume. Deploy idzie **bezpośrednio na Vercel, bez Webflow** (patrz [../CLAUDE.md](../CLAUDE.md)). Treść: [../copy/](../copy/) + [../personas/](../personas/).

## Stack (zgodny z peer-deps Relume)

- **Vite 8** + **React 18** + **TypeScript** (React 18, bo `@relume_io/relume-ui` wymaga `react ^18.2.0`)
- **Tailwind v3** + preset `@relume_io/relume-tailwind`
- **`@relume_io/relume-ui`** — 144 prymitywy (Button, Accordion, Carousel, Dialog, Form, Tabs, Table, Sidebar...)

## Komendy

```bash
cd relume
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build -> dist/
```

## Konfiguracja

- [tailwind.config.js](tailwind.config.js) — `presets: [relumePreset]` + `content` skanuje też `node_modules/@relume_io/relume-ui/dist`, żeby klasy komponentów trafiły do CSS.
- [postcss.config.js](postcss.config.js) — tailwindcss + autoprefixer (ESM, bo projekt to `type: module`).
- [src/index.css](src/index.css) — dyrektywy `@tailwind`.

## Co jest w paczce, a czego nie

- **Są:** prymitywy UI (Radix/shadcn). API i warianty każdego z nich w `node_modules/@relume_io/relume-ui/dist/index.d.ts`.
- **Nie ma:** gotowych SEKCJI (Hero, Navbar, Features, Pricing, CTA). Sekcje 1000+ kopiuje się ze strony relume.io i wkleja do `src/` jako komponenty React, składane z prymitywów + Tailwind.

## Następne kroki

1. Materiały z Claude Design + wybrane sekcje z relume.io trafiają do `src/sections/`.
2. Treść z [../copy/](../copy/) (9 wariantów) wstrzykiwana wg briefu [../copy/_executive-summary.md](../copy/_executive-summary.md).
