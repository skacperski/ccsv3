# personas/

Profile decydentów dla każdej kampanii reklamowej. **Wejście dla content writera** — opisuje kto kliknął, co go boli, co konwertuje, jaki ton.

## Mapowanie persona → kampania → copy

| Persona | Kanał | Kampania | Copy |
|---------|-------|----------|------|
| [gads-kary](gads-kary.md) | Google Ads | nis2-kary (kary / KSC 2026) | [copy/gads-kary.md](../copy/gads-kary.md) |
| [gads-podlegam](gads-podlegam.md) | Google Ads | nis2-test (czy podlegam) | [copy/gads-podlegam.md](../copy/gads-podlegam.md) |
| [gads-audyt](gads-audyt.md) | Google Ads | nis2-audyt (audyt 9 900 zł) | [copy/gads-audyt.md](../copy/gads-audyt.md) |
| [gads-wdrozenie](gads-wdrozenie.md) | Google Ads | nis2-wdrozenie (24 900 zł) | [copy/gads-wdrozenie.md](../copy/gads-wdrozenie.md) |
| [gads-aas](gads-aas.md) | Google Ads | nis2-managed (15 900 zł/mc) | [copy/gads-aas.md](../copy/gads-aas.md) |
| [li-ceo](li-ceo.md) | LinkedIn | nis2-li-ceo (zarząd) | [copy/li-ceo.md](../copy/li-ceo.md) |
| [li-ciso](li-ciso.md) | LinkedIn | nis2-li-ciso (CISO / IT) | [copy/li-ciso.md](../copy/li-ciso.md) |
| [li-coo](li-coo.md) | LinkedIn | nis2-li-ops (COO / ops) | [copy/li-coo.md](../copy/li-coo.md) |
| [default](default.md) | Direct / organic | (brak UTM) | [copy/default.md](../copy/default.md) |

## Struktura pliku persony

Każdy plik ma:
- **Kto kliknął** — rola, seniority, jaka firma
- **Co go ściągnęło** — co obiecała reklama
- **Co go boli** — konkretne pain points w polskim B2B
- **Czego potrzebuje, żeby skonwertować** — format, ton, trust signals
- **Obiekcje** — typowe „a może…" i jak je rozbroić
- **Ton i format** — krótkie zdania, długie zdania, jakich słów używać/unikać
- **Trust signals krytyczne** — czego nie wolno pominąć

## Workflow

Content writer otwiera personę, używa [prompts/01-generate-copy-from-persona.md](../prompts/01-generate-copy-from-persona.md), wynik trafia do [copy/](../copy/).
