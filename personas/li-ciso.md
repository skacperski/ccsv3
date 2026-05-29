---
id: li-ciso
channel: LinkedIn Ads
campaign: nis2-li-ciso
intent: porównanie · technical buyer
copy_file: copy/li-ciso.md
---

# Persona — `li-ciso`

## Kto kliknął

**CISO, dyrektor IT, security lead** w polskiej firmie 500–5000 osób. Trafił przez LinkedIn — reklama targetowała seniority IT/security + branże z listy 18 sektorów NIS2.

Już operacyjnie odpowiada za zgodność. **Porównuje dostawców**, ma swoje preferencje techniczne (SIEM, EDR, MSSP).

## Co go boli

- „Mam 5 dostawców: kancelaria do polityk, konsultant do procedur, agencja do pentestów, MSSP do SOC, i jeszcze kogoś do audytu rocznego. Każdy mówi co innego."
- „Mam ISO 27001 — większość vendorów chce mi sprzedać od zera, nie patrzy na to, co już mam."
- „Polityki są spisane, ale nie wiem, czy kontrola uzna je za wdrożone bez dowodów (logów, raportów)."
- „Boję się tańszych ofert — wiem, że często to junior z PowerPointa."
- „Mamy środowisko IT i OT. Jeden vendor zna jedną stronę. Nikt nie ogarnia całości jednym SLA."
- „Raportowanie incydentu w 24h to teraz walka z czasem, bo procesy klasyfikacji zdarzeń nie są zautomatyzowane."

## Czego potrzebuje, żeby skonwertować

- Dowody, że **vendor rozumie techniczną stronę** (art. 21 KSC, MITRE, MFA, SDLC).
- **Jedna umowa, jedno SLA** — to ich realny ból operacyjny.
- Sygnał, że istniejąca dojrzałość (ISO 27001) zostanie uznana, nie wymyślana od zera.
- Dla firm produkcyjnych: podejście **obejmujące IT i OT** (analiza luk pod IEC 62443, integracja systemów monitoringu).
- Raportowanie incydentów jako **zautomatyzowany proces**, nie ręczna walka z zegarem.
- **Compare** widoczny + szeroko (pomaga uzasadnić budżet przed CFO).

## Obiekcje, które muszą się rozejść

- „Mamy ISO — co z tego zostaje?" → FAQ #2 mówi: ISO 27001 pokrywa większość art. 21, brakuje 24h/72h, pentestów, dostawców.
- „Boję się junior'a z agencji." → Cytat o „pięciu firmach i jednym SLA", micro adresuje role (CISO, dyrektor IT, kierownik bezpieczeństwa).
- „SOC zewnętrzny jest wolniejszy niż własny." → cytat o 24h raporcie z jednej platformy.

## Ton i format

- **Ton:** techniczny, precyzyjny. Używaj `art. 21 NIS2`, `BCP/DRP`, `SOC`, `SIEM`, `pentest`, `MFA`. Nie tłumacz tych skrótów.
- **Format:** hero stat z trzema technicznymi pillarami (pentesty / art. 21 / jedno SLA). Featured card to `card-aas` — bo CISO myśli abonamentem dla SOC.
- **Risk:**
    - **H2:** Regulator chce dowodów,a sam folder polityk to za mało.
    - **Lead:** Kontrola pyta o logi, raporty z pentestów i czas reakcji na incydent. Polityki bez dowodów wdrożenia liczą się jak ich brak.
    - **Bullets:**
      - Analiza luk w środowiskach IT i OT pod art. 21 KSC.
      - Raportowanie incydentów jako zautomatyzowany proces, nie walka z zegarem.
      - Pentesty i naprawa podatności w cyklu.
      - Dostawcy ICT w audycie ryzyka łańcucha dostaw.

## Trust signals krytyczne

- Terminologia techniczna używana poprawnie (art. 21, podatności, SDLC).
- Brak anglicyzmów marketingowych („OneStopShop", „as a Service" jako termin).
- Cytat z CISO o realnym bólu („koniec ganiania pięciu firm").
- Brak ceny w hero — to nie ich pierwsze pytanie; cena pojawia się w pricing section.

## Otwarte pytania

- Czy dodać konkretny stack technologiczny (SIEM jaki? EDR jaki?), żeby pokazać kompetencję? Może jako sekcja „Stack" w design.
- Czy podać dane zespołu (OSCP, CISSP, CISA) na stronie? Bardzo silny trust signal dla CISO.

## Mapowanie do copy

→ [copy/li-ciso.md](../copy/li-ciso.md)
