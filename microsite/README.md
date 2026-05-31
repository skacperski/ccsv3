# CCS microsite

Next.js 15 (App Router) + Tailwind + TypeScript. Statyczny eksport (`output: 'export'`) — buduje do `out/`, deploy na Vercel jako static.

## Dev

```bash
cd microsite
npm install
npm run dev
# http://localhost:3000
```

## Build (production / SSG)

```bash
npm run build
# generuje out/ — pełen statyczny HTML/CSS/JS
```

## Struktura

```
app/
  layout.tsx          # root layout, JetBrains Mono font
  page.tsx            # default microsite (montaż 6 rozdziałów)
  globals.css         # Tailwind + custom keyframes
components/microsite/
  TopNav, Reveal, ChapterHead, ExecCard, ExecStill,
  FeatureBlock, CardGrid, Card, FeatureTable, ReadMore,
  PlaceholderCanvas, SubIndex, CTAStrip, Footer
components/microsite/stages/
  FineStage, QuizStage, ReportStage, TimelineStage, StackStage, BoardStage
content/
  chapters.ts         # 6-chapter typed dataset (PODMIEŃ TUTAJ TEKSTY)
lib/
  types.ts            # Chapter, ExecCard, FeatureTableRow, CardItem
  tokens.ts           # palette/fonts/spacing tokens
```

## Podmiana tekstów

Edytuj `content/chapters.ts`. Wszystkie pola są typowane — IDE pokaże co musisz dostarczyć.

Aby zrobić wariant: skopiuj `chapters.ts` → `chapters-v2.ts`, stwórz nową route `app/v2/page.tsx` która importuje `chapters-v2`.

## Deploy

Vercel: Root Directory = `microsite/`. Vercel wykryje Next.js + `output: 'export'` i serwuje `out/` z CDN.
