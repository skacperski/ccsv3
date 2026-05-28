# designs/

Skonkretne języki wizualne — każdy plik to **niezależny re-skin** tej samej treści NIS2 (z [copy/](../copy/)) na innym design systemie.

Wszystkie pliki dzielą **kontrakt JS** (obiekt `VARIANTS`, funkcja `applyVariant`, ID DOM, klasy CSS) — patrz [prompts/03-sync-copy-to-wireframes.md](../prompts/03-sync-copy-to-wireframes.md).

## Pliki

| Design | Styl | Referencja | Status |
|--------|------|------------|--------|
| [design-hashicorp.html](design-hashicorp.html) | Dark enterprise tech, Inter, blue accent | [references/getdesign-ibm-carbon.md](../references/getdesign-ibm-carbon.md) → HashiCorp re-skin | działa |
| [design-cohere.html](design-cohere.html) | Cohere — Space Grotesk, soft-stone, coral chips, Razorpay-blue band | getdesign.md/cohere | działa |
| [design-awwwards.html](design-awwwards.html) | Brutalist editorial, Anton + Instrument Serif, custom cursor, horizontal scroll, magnetic CTAs | własna kompozycja | działa |
| [design-sprint.html](design-sprint.html) | Razorpay Sprint'26 editorial, TASA Orbiter, GSAP + ScrollTrigger | [references/getdesign-razorpay-sprint.md](../references/getdesign-razorpay-sprint.md) | działa |

## Jak otworzyć

```bash
open designs/design-cohere.html
# z konkretnym wariantem
open "designs/design-cohere.html?variant=li-ciso"
open "designs/design-cohere.html?utm_campaign=nis2-managed"
```

## Jak zbudować nowy design

[prompts/04-build-new-design.md](../prompts/04-build-new-design.md).

## Jak zsynchronizować zmiany w copy

Po edycji [copy/](../copy/) → [prompts/03-sync-copy-to-wireframes.md](../prompts/03-sync-copy-to-wireframes.md).
