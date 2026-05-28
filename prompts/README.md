# prompts/

Szablony promptów dla agenta. **Wejście dla zespołu** — content writer i deweloper mówią agentowi „użyj prompts/XX, żeby zrobić Y".

## Workflow (dla zespołu)

```
Content writer (Julia)
   │
   ├── 01-generate-copy-from-persona.md  →  copy/<variant>.md
   │   (czyta personas/, pisze copy)
   │
   ├── 02-humanize-copy.md  →  copy/<variant>.md
   │   (drugi pass humanizera)
   │
   ↓
Sebastian
   │
   ├── 03-sync-copy-to-wireframes.md  →  wireframes/wireframe.html + designs/*.html
   │   (sync VARIANTS z copy/ do JS)
   │
   ├── 04-build-new-design.md  →  designs/design-<name>.html
   │   (re-skin w nowym języku wizualnym, ten sam JS contract)
```

## Pliki

- **[01-generate-copy-from-persona.md](01-generate-copy-from-persona.md)** — Julia używa: bierze personę z [personas/](../personas/), generuje treść do [copy/](../copy/).
- **[02-humanize-copy.md](02-humanize-copy.md)** — Julia używa: drugi pass humanizera (em-dashy, anglicyzmy, AI vocabulary out).
- **[03-sync-copy-to-wireframes.md](03-sync-copy-to-wireframes.md)** — Sebastian używa: synchronizuje markdown copy do obiektu `VARIANTS` w plikach HTML.
- **[04-build-new-design.md](04-build-new-design.md)** — Sebastian używa: tworzy nowy `designs/design-<name>.html` w nowym stylu (zachowuje JS contract).

## Jak wywołać prompt

```
Użyj `prompts/01-generate-copy-from-persona.md`, żeby wygenerować copy dla
`personas/li-ciso.md`. Wynik zapisz jako `copy/li-ciso.md`.
```

Albo dla wielu plików:

```
Użyj `prompts/02-humanize-copy.md` na wszystkich plikach w `copy/`.
```

## Reguły dla wszystkich promptów

- **Fakty są nietykalne** — kwoty, daty, progi, terminy. Lista w [copy/_shared.md](../copy/_shared.md) → Facts & constraints.
- **Humanizer obowiązkowy** dla wszystkiego user-facing — [.cursor/skills/humanizer/SKILL.md](../.cursor/skills/humanizer/SKILL.md) + [.cursor/rules/humanizer.mdc](../.cursor/rules/humanizer.mdc) (auto-enforce dla `*.html`).
- **Kontrakt JS** zachowany w plikach HTML — lista wymaganych ID/funkcji w [prompts/03-sync-copy-to-wireframes.md](03-sync-copy-to-wireframes.md).
