import type { Chapter, SiteData } from '@/lib/types';

export const site: SiteData = {
  brand: { name: 'CyCommSec', release: 'NIS2' },
  ctaStrip: {
    line1: 'NIS2 zaczyna się od zarządu.',
    line2: 'Sankcja kończy się tam samym.',
    cta: 'UMÓW SPOTKANIE Z PARTNEREM',
  },
  footer: {
    legal: '© 2026 CyCommSec sp. z o.o. · KRS 0000123456 · ul. Wspólna 70, Warszawa',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
      { label: 'www.cycommsec.pl', href: '#' },
    ],
    wordmark: '/NIS2',
  },
};

export const chapters: Chapter[] = [
  {
    id: 'ch1',
    number: '01',
    navLabel: 'KARY',
    heroTheme: 'default',
    subBlockTheme: 'dark',
    head: {
      title: 'Kary',
      lede: 'Dziesięć milionów euro lub 2% obrotu. Sankcje sięgają zarządu — osobiście.',
      subBlockSubIndex: '01/A',
    },
    exec: {
      name: 'MARTA KOZŁOWSKA',
      role: 'PARTNER, COMPLIANCE',
      quote:
        '„NIS2 nie zostawia miejsca na pomyłki. <em>To nie problem IT — to problem zarządu.</em> Audyt nie pyta, czy wdrożyliście. Pyta, czy odpowiedzialny członek zarządu rozumie, co podpisał."',
    },
    subBlock: {
      h3: 'Skala odpowiedzialności',
      kicker:
        'Dyrektywa NIS2 wprowadza najwyższe sankcje administracyjne w historii europejskiej regulacji cyfrowej. Płaci firma. Odpowiada zarząd.',
      ctaLabel: 'SPRAWDŹ KARY',
      stage: {
        kind: 'fine',
        data: {
          amount: '10',
          amountSup: 'MLN EUR',
          ticker: 'LUB 2% GLOBALNEGO OBROTU ROCZNEGO — KTÓRA KWOTA WYŻSZA',
          stamps: [
            { label: 'ART. 34', color: 'blue', pos: 's1' },
            { label: 'CRITICAL', color: 'red', pos: 's2' },
            { label: 'ESSENTIAL ENTITY', color: 'white', pos: 's3' },
          ],
        },
      },
    },
    cards: {
      columns: 3,
      items: [
        {
          canvas: { kind: 'striped-dark', tag: 'screenshot · rejestr kar' },
          title: 'Rejestr decyzji UKE',
          body: 'Mapujemy każdą decyzję sankcyjną krajowego organu właściwego do konkretnego artykułu KSC, byście wiedzieli, co naprawdę karze regulator.',
          cta: { label: 'CZYTAJ DALEJ', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'illustration · wireframe zarząd' },
          title: 'Odpowiedzialność osobista',
          body: 'Zarząd odpowiada osobiście za nadzór nad zarządzaniem ryzykiem cyber. Pokazujemy, jakie decyzje muszą być udokumentowane, by zdjąć odpowiedzialność z osoby fizycznej.',
          cta: { label: 'CZYTAJ DALEJ', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'document · checklist' },
          title: 'Co uruchamia audyt',
          body: 'Incydent, skarga klienta, kontrola krzyżowa z innym regulatorem. Trzy najczęstsze wektory uruchomienia inspekcji NIS2 i jak być na nie gotowym.',
          cta: { label: 'CZYTAJ DALEJ', variant: 'blue' },
        },
      ],
    },
    table: [
      {
        label: 'Sankcje administracyjne',
        body: 'Do 10 mln EUR lub 2% globalnego obrotu rocznego (essential entities). Dla podmiotów important — do 7 mln EUR lub 1,4% obrotu.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Tymczasowy zakaz pełnienia funkcji',
        body: 'Organ nadzoru może zawiesić w obowiązkach członka zarządu odpowiedzialnego za nadzór nad cyberbezpieczeństwem aż do wykonania środków naprawczych.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Publikacja naruszenia',
        body: 'Decyzja sankcyjna jest publikowana z nazwą podmiotu. Reputacyjny koszt sankcji bywa wyższy niż samej kary finansowej.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Solidarna odpowiedzialność',
        body: 'W przypadku rażącego niedbalstwa członkowie organu zarządzającego mogą odpowiadać własnym majątkiem. Ubezpieczenie D&O nie pokrywa wszystkich naruszeń.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Obowiązek notyfikacji 24h',
        body: 'Wczesne ostrzeżenie o incydencie istotnym ma trafić do CSIRT w 24 godziny. Raport pełny — w 72h. Brak procedur to automatyczne naruszenie.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Kontrola łańcucha dostawców',
        body: 'Wasi dostawcy IT są wasim ryzykiem. Brak weryfikacji bezpieczeństwa kontrahentów to samodzielna podstawa do sankcji wobec waszego podmiotu.',
        more: 'CZYTAJ DALEJ',
      },
    ],
  },
  {
    id: 'ch2',
    number: '02',
    navLabel: 'KWALIFIKACJA',
    heroTheme: 'blue',
    subBlockTheme: 'blue',
    head: {
      title: 'Czy podlegasz\npod NIS2?',
      lede: 'Dwie minuty. Sześć pytań. Konkretna odpowiedź — z konkretnym numerem artykułu.',
      subBlockSubIndex: '02/',
      primaryCta: { label: 'URUCHOM TEST KWALIFIKACJI', href: '#' },
    },
    exec: {
      name: '',
      role: '',
      quote: '',
    },
    subBlock: {
      h3: '',
      kicker: '',
      ctaLabel: '',
      stage: {
        kind: 'quiz',
        data: {
          questionLabel: 'PYTANIE 4 / 6',
          timeLabel: '~ 1 MIN POZOSTAŁO',
          questionText: 'Czy świadczycie usługi krytyczne dla podmiotu z sektora regulowanego?',
          options: [
            { label: 'Tak, w sektorze energetycznym' },
            { label: 'Tak, jako dostawca IT dla szpitala / banku', picked: true },
            { label: 'Pośrednio (poddostawca poddostawcy)' },
            { label: 'Nie' },
          ],
          result: {
            tag: 'PODLEGASZ',
            entity: 'Important Entity',
            reason:
              'Art. 3 ust. 2 lit. b — sektor cyfrowy jako dostawca usług ICT dla podmiotu kluczowego.',
          },
        },
      },
    },
    cards: {
      columns: 4,
      items: [
        {
          canvas: { kind: 'stat-blue', bigText: '18', smallText: 'SEKTORÓW KRYTYCZNYCH' },
          title: 'Sektory objęte regulacją',
          body: 'Energia, transport, bankowość, infrastruktura cyfrowa, administracja publiczna, dostawcy ICT, kosmos, produkcja, żywność, badania. Sprawdź swój.',
          cta: { label: 'SPRAWDŹ SEKTOR', variant: 'white' },
        },
        {
          canvas: { kind: 'stat-blue', bigText: '50+', smallText: 'PRACOWNIKÓW / 10 MLN EUR' },
          title: 'Próg wielkości',
          body: 'Dyrektywa ustawia jasne progi — średni i duży podmiot kwalifikuje się automatycznie. Dla mniejszych decyduje sektor i znaczenie systemowe.',
          cta: { label: 'PROGI SZCZEGÓŁOWO', variant: 'white' },
        },
        {
          canvas: { kind: 'stat-blue', bigText: 'B2B', smallText: 'PODDOSTAWCY' },
          title: 'Łańcuch zależności',
          body: 'Nawet jeśli nie jesteś podmiotem regulowanym wprost, twoi klienci mogą wymagać zgodności kontraktowo. To trzeci, ukryty zakres NIS2.',
          cta: { label: 'JAK SIĘ PRZYGOTOWAĆ', variant: 'white' },
        },
        {
          canvas: { kind: 'stat-blue', bigText: '2 MIN', smallText: 'DO PIERWSZEJ ODPOWIEDZI' },
          title: 'Test kwalifikacji',
          body: 'Sześć pytań. Wynik z numerem artykułu i krótkim uzasadnieniem. Bez kontaktu z handlowcem. Bez pliku PDF do pobrania. Po prostu odpowiedź.',
          cta: { label: 'URUCHOM', variant: 'white' },
        },
      ],
    },
    table: [],
  },
  {
    id: 'ch3',
    number: '03',
    navLabel: 'AUDYT',
    heroTheme: 'default',
    subBlockTheme: 'dark',
    head: {
      title: 'Audyt',
      lede: 'Od 9 900 zł. Raport dla zarządu, nie dla działu IT. Czternaście dni roboczych do dokumentu, który możecie podpisać.',
      subBlockSubIndex: '03/A',
    },
    exec: {
      name: 'PAWEŁ NOWAK',
      role: 'LEAD AUDITOR · CISA',
      quote:
        '„Większość audytów NIS2, które widziałem, była po prostu audytami ISO 27001 z nową okładką. <em>My piszemy raport, który zarząd zrozumie w 30 minut</em> i podpisze tego samego dnia."',
    },
    subBlock: {
      h3: 'Raport, który zarząd przeczyta',
      kicker:
        'Trzy strony streszczenia z numerami artykułów i kolorem ryzyka. Czternaście stron technicznych załączników. Plan naprawczy z konkretnymi terminami i właścicielami.',
      ctaLabel: 'ZOBACZ PRZYKŁADOWY RAPORT',
      stage: {
        kind: 'report',
        data: {
          reportStamp: 'REPORT · KSC · 2026-Q1',
          reportTitle: 'CyCommSec / Audyt NIS2 — ENTITAS S.A.',
          pageCode: 'PG-002 / POUFNE',
          score: [
            { key: 'Krytyczne', value: '7', tone: 'red' },
            { key: 'Średnie', value: '14', tone: 'amber' },
            { key: 'Zgodne', value: '41', tone: 'green' },
          ],
          bars: [
            { label: 'Art. 21.2.a', pct: 78, tone: 'r' },
            { label: 'Art. 21.2.d', pct: 54, tone: 'a' },
            { label: 'Art. 23.1', pct: 92, tone: 'g' },
            { label: 'Art. 23.4', pct: 46, tone: 'a' },
            { label: 'Art. 24', pct: 34, tone: 'r' },
          ],
          sticky: {
            headline: 'STARTUJEMY OD',
            bigNumber: '9 900 zł',
            subline: '14 dni roboczych. Bez vendor-locku.',
          },
        },
      },
    },
    cards: {
      columns: 3,
      items: [
        {
          canvas: { kind: 'striped-dark', tag: 'document · executive summary' },
          title: 'Executive Summary 3-stronicowe',
          body: 'Trzy strony, które prezes zrozumie w czasie kawy. Każde ustalenie spięte z konkretnym artykułem KSC i własnoścą operacyjną w organizacji.',
          cta: { label: 'ZOBACZ FORMAT', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'screenshot · plan naprawczy' },
          title: 'Plan naprawczy z terminami',
          body: 'Dla każdej luki: właściciel, koszt, czas wdrożenia, ryzyko pozostawienia. Plan, który można od razu wstawić do agendy zarządu.',
          cta: { label: 'PRZYKŁAD PLANU', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'screenshot · audit trail' },
          title: 'Dowody, nie deklaracje',
          body: 'Każde stwierdzenie zgodności poparte konkretnym artefaktem — politiką, logiem, screenshotem konfiguracji. Audyt regulatora startuje stąd.',
          cta: { label: 'METODOLOGIA', variant: 'blue' },
        },
      ],
    },
    table: [
      {
        label: 'Audyt Express',
        body: '14 dni roboczych, do 80 osób w organizacji, od 9 900 zł. Skan zgodności z 24 obszarami NIS2 + dwustronicowe streszczenie dla zarządu.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Audyt Pełny',
        body: '28 dni roboczych, do 500 osób, od 24 900 zł. Pogłębione testy procesów, weryfikacja dostawców, mapa ryzyk z metryką BIA.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Pre-audit przed regulatorem',
        body: 'Symulujemy inspekcję krajowego organu właściwego. Wskazujemy konkretne odpowiedzi, dokumenty, osoby do zaangażowania w dzień kontroli.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Mapa dostawców ICT',
        body: 'Klasyfikujemy waszych dostawców według ryzyka NIS2, dostarczamy gotowe klauzule kontraktowe, wskazujemy luki do renegocjacji.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Tabletop dla zarządu',
        body: 'Półtorgodzinna symulacja incydentu — telefon o 2:00 w nocy, dziennikarz, regulator, klient. Zarząd ćwiczy decyzje, których nie da się odłożyć.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Re-audit roczny',
        body: 'Po wdrożeniu — coroczny pomiar dojrzałości w tej samej metodyce. Pokazujemy trend, nie tylko stan na dzisiaj. Wymagany przez wielu klientów B2B.',
        more: 'CZYTAJ DALEJ',
      },
    ],
  },
  {
    id: 'ch4',
    number: '04',
    navLabel: 'WDROŻENIE',
    heroTheme: 'paper',
    subBlockTheme: 'paper',
    head: {
      title: 'Wdrożenie',
      lede: 'Sześć miesięcy. Jeden zespół. Bez koordynowania czterech dostawców pod telefonem prezesa.',
      subBlockSubIndex: '04/A',
    },
    exec: {
      name: 'ANIA SZYMAŃSKA',
      role: 'DELIVERY DIRECTOR',
      quote:
        '„Klient, który próbuje wdrożyć NIS2 samodzielnie, średnio rozmawia z siedmioma dostawcami. <em>My przychodzimy z jedną umową, jednym kierownikiem projektu, jedną fakturą</em> — i sześciomiesięczną gwarancją zgodności."',
    },
    subBlock: {
      h3: 'Sześć miesięcy. Jeden zespół.',
      kicker:
        'Czterech architektów, dwóch prawników, koordynator z waszej strony. Procesy, dokumentacja, technologie, szkolenia zarządu — w jednej ścieżce krytycznej.',
      ctaLabel: 'ZOBACZ HARMONOGRAM',
      stage: {
        kind: 'timeline',
        data: {
          startLabel: 'START',
          startSub: 'M+0 · kick-off',
          endLabel: 'ZGODNOŚĆ',
          endSub: 'M+6 · sign-off zarządu',
          nodes: [
            { month: 'M+1', label: 'ASSESSMENT', active: true, leftPct: 18 },
            { month: 'M+2', label: 'DESIGN', leftPct: 34 },
            { month: 'M+3', label: 'BUILD', leftPct: 50 },
            { month: 'M+4', label: 'TEST', leftPct: 66 },
            { month: 'M+5', label: 'DRY-RUN', leftPct: 82 },
          ],
          marker: 'JESTEŚCIE TUTAJ → ASSESSMENT',
        },
      },
    },
    cards: {
      columns: 3,
      items: [
        {
          canvas: { kind: 'striped-light', tag: 'illustration · org chart' },
          title: 'Jeden kierownik projektu',
          body: 'Wasz pojedynczy punkt kontaktu — odpowiedzialny za harmonogram, dostawców i raportowanie do zarządu. Nie musicie zarządzać czterema dostawcami pod telefonem prezesa.',
          cta: { label: 'JAK PRACUJEMY', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-light', tag: 'screenshot · runbook biblioteka' },
          title: 'Biblioteka 84 dokumentów',
          body: 'Polityki, procedury, runbooks gotowe do customizacji. Nie zaczynamy od pustej strony — zaczynamy od materiału, który przeszedł audyt regulatora.',
          cta: { label: 'SPIS DOKUMENTÓW', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-light', tag: 'photo · sala szkoleniowa' },
          title: 'Szkolenia zarządu i KPO',
          body: 'Dwa moduły dla zarządu (3h), pięć modułów dla pracowników kluczowych (2h każdy). Certyfikat ukończenia, który traktuje regulator jako dowód.',
          cta: { label: 'PROGRAM', variant: 'blue' },
        },
      ],
    },
    table: [
      {
        label: 'Gotowa biblioteka polityk',
        body: '84 dokumenty (polityka informacyjna, zarządzania incydentem, kryptografii, BCM, dostawców…) — pre-aprobowane przez biegłego prawnika i przetestowane w trzech inspekcjach.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'SOC w 30 dni',
        body: 'Wpinanie naszego SOC do waszych źródeł logów — Active Directory, EDR, firewalls, krytyczne aplikacje. 24/7 monitoring, 15-minutowy SLA na incydent krytyczny.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Tabletop incydentu z zarządem',
        body: 'Półtorgodzinna symulacja w miesiącu trzecim. Telefon o 2:00 w nocy, regulator, dziennikarz, klient. Zarząd ćwiczy decyzje, których nie da się delegować.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Zarządzanie dostawcami ICT',
        body: 'Klasyfikacja waszych poddostawców według ryzyka, klauzule kontraktowe, plan renegocjacji. Dostarczamy szablony i prowadzimy negocjacje wspólnie z waszym działem prawnym.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Procedura notyfikacji 24/72h',
        body: 'Gotowa procedura zgłoszenia do CSIRT i regulatora w 24h (wstępne) i 72h (pełne). Wraz z wzorami formularzy i kanałami komunikacji do zewnętrznych interesariuszy.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Sign-off zarządu',
        body: 'W miesiącu szóstym dostarczamy pakiet decyzji do uchwały zarządu — z opinią prawną, mapą ryzyk i wnioskami z dry-runu. Zarząd podpisuje, regulator akceptuje.',
        more: 'CZYTAJ DALEJ',
      },
    ],
  },
  {
    id: 'ch5',
    number: '05',
    navLabel: 'MSS',
    heroTheme: 'dark',
    subBlockTheme: 'dark',
    head: {
      title: 'MSS',
      lede: 'SOC, pentesty, zgodność. Jedna faktura. Od 15 900 zł miesięcznie — bez minimalnego okresu zobowiązania powyżej kwartału.',
      subBlockSubIndex: '05/A',
    },
    exec: {
      name: 'TOMASZ WÓJCIK',
      role: 'HEAD OF SOC',
      quote:
        '„Nasz SOC nie sprzedaje godzin. <em>Sprzedaje wynik: czas reakcji 15 minut na incydent krytyczny</em>, 24/7, ze zobowiązaniem w SLA — i karami umownymi po naszej stronie."',
    },
    subBlock: {
      h3: 'Jedna umowa, jedna faktura',
      kicker:
        'SOC 24/7 + dwa pentesty rocznie + audyt zgodności + zarządzanie podatnościami + szkolenia w jednym kontrakcie. Bez dziewięciu zamówień miesięcznie i renegocjacji z każdym dostawcą osobno.',
      ctaLabel: 'ZOBACZ ZAKRES MSS',
      stage: {
        kind: 'stack',
        data: {
          alerts: [
            { ts: '02:14:08', text: 'EDR · suspicious lsass dump', pos: 'a1' },
            { ts: '02:14:11', text: 'SIEM · lateral movement detected', pos: 'a2' },
            { ts: '02:14:19', text: 'IR · isolation triggered', pos: 'a3' },
            { ts: '02:14:33', text: 'STATUS · contained < 5 min', pos: 'a4' },
          ],
        },
      },
    },
    cards: {
      columns: 3,
      items: [
        {
          canvas: { kind: 'striped-dark', tag: 'dashboard · SOC console' },
          title: 'SOC 24/7',
          body: 'Trzy zmiany, dwóch analityków na każdej. Detekcja, triage, escalation, response. 15 min SLA na incydent krytyczny, 60 min na wysoki — z karami umownymi po naszej stronie.',
          cta: { label: 'SLA SOC', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'terminal · pentest report' },
          title: 'Pentesty 2× rocznie',
          body: 'Web aplikacje, infrastruktura, sieć wewnętrzna, opcjonalnie OT. Raport CVSS-scored z reprodukcją ataku i konkretnym fix-item dla każdego znaleziska.',
          cta: { label: 'METODYKA', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-dark', tag: 'screenshot · compliance dash' },
          title: 'Compliance Dashboard',
          body: 'Stan zgodności z NIS2, ISO 27001, DORA i RODO w jednym widoku, aktualizowany w czasie rzeczywistym z pracą SOC i z waszych kontroli technicznych.',
          cta: { label: 'DEMO DASHBOARD', variant: 'blue' },
        },
      ],
    },
    table: [
      {
        label: 'Starter — 15 900 zł / mies.',
        body: 'SOC 24/7 dla do 200 endpointów, 1 pentest rocznie, kwartalny przegląd zgodności, raport miesięczny dla zarządu. Trzymiesięczny okres wypowiedzenia.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Scale — 34 900 zł / mies.',
        body: 'Do 1000 endpointów, 2 pentesty rocznie, audyt NIS2 roczny, dedykowany IR-lead, dostęp do tabletop dla zarządu raz w roku w cenie.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Enterprise — wycena',
        body: 'Powyżej 1000 endpointów. SOC z dedykowanymi analitykami, threat intelligence sektorowe, pre-audit przed regulatorem, on-site IR-response.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: '15-min SLA na P1',
        body: 'Incydent krytyczny: 15 minut od alarmu do pierwszej akcji obronnej (izolacja hosta, blokada konta). Niedotrzymanie SLA — kary umowne po naszej stronie.',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Threat Intelligence sektorowe',
        body: 'Dostarczamy raporty zagrożeń dla waszego sektora — z aktywnymi kampaniami APT, podatnościami CVE w waszej technologii i wskaźnikami kompromisu (IoC).',
        more: 'CZYTAJ DALEJ',
      },
      {
        label: 'Bez vendor-locku',
        body: 'Pracujemy na waszych narzędziach (EDR, SIEM, IAM). Jeśli zdecydujecie się odejść — eksportujemy konfiguracje, runbooks i historię alertów w 14 dni.',
        more: 'CZYTAJ DALEJ',
      },
    ],
  },
  {
    id: 'ch6',
    number: '06',
    navLabel: 'ZARZĄD',
    heroTheme: 'default',
    subBlockTheme: 'default',
    head: {
      title: 'Dla zarządu',
      lede: 'KSC wchodzi w życie. Zarząd odpowiada osobiście. Pokażemy, jakie decyzje musicie podjąć i podpisać — i kiedy najpóźniej.',
      subBlockSubIndex: '06/A',
    },
    exec: {
      name: 'JAKUB LEWANDOWSKI',
      role: 'CEO · CYCOMMSEC',
      quote:
        '„Dziewięć na dziesięć rozmów o NIS2 zaczyna się od CIO. <em>Powinno zaczynać się od zarządu.</em> Sankcja jest osobista — i nie odda jej audytor."',
    },
    subBlock: {
      h3: 'Czego zarząd nie może delegować',
      kicker:
        'Uchwała o zatwierdzeniu polityki bezpieczeństwa. Decyzja o akceptacji ryzyka rezydualnego. Wybór odpowiedzialnego członka zarządu. Trzy podpisy, których nie zdejmuje z was żaden dyrektor IT.',
      ctaLabel: 'PEŁNA LISTA ODPOWIEDZIALNOŚCI',
      stage: {
        kind: 'board',
        data: {
          docNumber: 'UCHWAŁA NR 12/2026 / ZARZĄD ENTITAS S.A.',
          docStatus: 'PROJEKT / DO PODPISU',
          title:
            'W sprawie wdrożenia Krajowego Systemu Cyberbezpieczeństwa zgodnie z dyrektywą NIS2',
          bullets: [
            'Zatwierdzenie polityki bezpieczeństwa informacji',
            'Akceptacja mapy ryzyk i ryzyka rezydualnego',
            'Wyznaczenie członka zarządu odpowiedzialnego',
            'Powołanie pełnomocnika ds. cyberbezpieczeństwa',
            'Zatwierdzenie procedury notyfikacji 24/72h',
            'Akceptacja budżetu rocznego — 1 240 000 zł',
          ],
          signLeft: 'Prezes Zarządu',
          signRight: 'Członek Zarządu ds. Cyber',
          stamp: 'PILNE',
        },
      },
    },
    cards: {
      columns: 3,
      items: [
        {
          canvas: { kind: 'striped-light', tag: 'document · uchwała zarządu' },
          title: 'Pakiet uchwał zarządu',
          body: 'Sześć gotowych uchwał z opinią prawną — od zatwierdzenia polityki bezpieczeństwa po akceptację budżetu. Wstawiacie do agendy, podpisujecie, archiwizujecie.',
          cta: { label: 'ZOBACZ PAKIET', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-light', tag: 'illustration · D&O insurance' },
          title: 'D&O dla NIS2',
          body: 'Pomagamy renegocjować polisy zarządu pod kątem nowych ryzyk regulacyjnych. Sześciu brokerów współpracujących, klauzule pre-aprobowane przez nasz dział prawny.',
          cta: { label: 'KONTAKT Z BROKEREM', variant: 'blue' },
        },
        {
          canvas: { kind: 'striped-light', tag: 'photo · tabletop sesja' },
          title: 'Tabletop 90 minut',
          body: 'Symulacja incydentu dla zarządu i kluczowych dyrektorów. Reżyseria zewnętrzna, scenariusz dopasowany do waszego sektora, raport pisemny z rekomendacjami.',
          cta: { label: 'UMÓW SESJĘ', variant: 'blue' },
        },
      ],
    },
    table: [],
  },
];
