---
id: li-coo
channel: LinkedIn Ads
campaign: nis2-li-ops
intent: operacyjna gotowość · BCP / dostawcy
copy_file: copy/li-coo.md
---

# Persona — `li-coo`

## Kto kliknął

**COO, dyrektor operacyjny, head of operations** w firmie produkcyjnej, logistycznej, infrastrukturalnej (typowe dla 18 sektorów NIS2). Targetowany przez LinkedIn po tytule + branży.

Nie odpowiada bezpośrednio za cyber, ale **odpowiada za ciągłość operacji**. Incydent = jego problem. Awaria dostawcy = jego problem.

## Co go boli

- „Mamy plan BCP w PDF, ale nikt go nie testował od 2 lat."
- „Połowa naszych systemów to dostawcy zewnętrzni — co jak oni padną?"
- „Jak ktoś z IT zadzwoni o 3 w nocy, nie wiem, czy mam wzór raportu do CSIRT."
- „Boję się incydentu, który zatrzyma produkcję na 24h."
- „Mam wymogi do wdrożenia, ale nie mam ludzi ani czasu, żeby to zrobić bez przerywania bieżącej działalności."
- „Audyt dostawców IT jako wymóg regulacyjny. Art. 8 KSC nie daje wyboru. Nie wiem, od czego zacząć audyt dostawców."

## Czego potrzebuje, żeby skonwertować

- Konkrety operacyjne: **MTTD, MTTR, RTO, RPO** (skróty COO zna).
- **Harmonogram reakcji na incydent** — kto, kiedy, co.
- **Audyt dostawców IT** jako wyraźna usługa, adresująca wymóg łańcucha dostaw.
- Sygnał, że wdrożenie może iść **bez angażowania całego własnego IT** i bez przestojów operacyjnych.
- Cytat operacyjny (COO mówiący o ćwiczeniu incydentu).

## Obiekcje, które muszą się rozejść

- „Mamy SLA z dostawcami — to ich problem." → audyt dostawców jest wymogiem art. 21 (łańcuch dostaw).
- „Robiliśmy ćwiczenia, są w katalogu." → ćwiczenia bez raportu pod 24h/72h nie wystarczą dla kontroli.
- „SOC zewnętrzny nie zna naszych systemów." → onboarding obejmuje mapowanie infrastruktury.

## Ton i format

- **Ton:** operacyjny, zwięzły, „24h/72h ogarnięte?". Bez sloganów.
- **Format:** featured card `card-aas` (model abonamentowy najlepiej rozwiązuje ich ból ciągłości). Compare widoczny.
- **Risk:**
    - **H2:** Awaria bez zgłoszenia to dwa problemy naraz
    - **Lead:** Pierwszy: incydent nie obsłużony. Drugi: termin 24h minął, więc dochodzi sprawa regulacyjna. Drugi problem często kosztuje więcej.
    - **Bullets:**
      - Plany ciągłości działania i testy scenariuszy bez angażowania całego IT.
      - Zarządzanie ryzykiem dostawców jako wymóg regulacyjny, nie opcja.
      - Zgłoszenie incydentu w 24h bez gotowego wzoru raportu.
      - SOC i reakcja przez całą dobę.

## Trust signals krytyczne

- Konkretne terminy 24h/72h jako stat.
- BCP/DRP wprost wymienione.
- Cytat COO o ćwiczeniu incydentu w 24h.
- Brak abstrakcyjnego „compliance" — same operacyjne efekty.

## Otwarte pytania

- Czy podać konkretny RTO/RPO w SLA? Dla COO to konkretne pytanie, które padnie w drugim kontakcie.

## Mapowanie do copy

→ [copy/li-coo.md](../copy/li-coo.md)
