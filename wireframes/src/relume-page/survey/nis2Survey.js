// NIS2 / KSC survey — decision-tree definition for the interactive wireframe.
// Mirrors NIS2-survey-wireframe-path.md: 15 questions, branching to 4 results.
// `next(value, answers)` returns the next question id (string) or { result }.

const YESNO = [
  { label: "Tak", value: "tak" },
  { label: "Nie", value: "nie" },
];

// Annex I — sektory kluczowe (krok 12)
export const ANNEX_I = [
  "Energetyka",
  "Transport",
  "Bankowość",
  "Infrastruktura rynku finansowego",
  "Zdrowie",
  "Woda pitna",
  "Ścieki",
  "Infrastruktura cyfrowa",
  "Zarządzanie usługami ICT (B2B)",
  "Przestrzeń kosmiczna",
];

// Annex II — pozostałe sektory (krok 12b)
export const ANNEX_II = [
  "Usługi pocztowe i kurierskie",
  "Gospodarowanie odpadami",
  "Produkcja i dystrybucja chemikaliów",
  "Produkcja i dystrybucja żywności",
  "Produkcja (wyroby medyczne, elektronika, maszyny, pojazdy)",
  "Dostawcy usług cyfrowych",
  "Badania naukowe",
];

const NONE = "Żaden z powyższych";

// Final size/sector classification → result id.
export function computeFinalResult(ans) {
  const annex =
    ans.sector1 && ans.sector1 !== NONE
      ? "1"
      : ans.sector2 && ans.sector2 !== NONE
        ? "2"
        : null;

  const big = ans.emp === "250+" || (ans.turnover === ">50" && ans.balance === ">43");
  const meetsThreshold =
    ["250+", "50-249"].includes(ans.emp) ||
    [">50", "10-50"].includes(ans.turnover) ||
    [">43", "10-43"].includes(ans.balance);

  if (!meetsThreshold) return "out-of-scope";
  if (annex === "1" && big) return "essential";
  return "important";
}

export const QUESTIONS = {
  eu: {
    n: 1,
    question:
      "Czy Twoja organizacja posiada jednostkę w UE lub świadczy usługi / realnie prowadzi działalność na terytorium UE (w tym w Polsce)?",
    help: "Dotyczy zarówno fizycznej obecności, jak i świadczenia usług na terenie Unii Europejskiej.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? "trust" : { result: "out-of-scope" }),
  },
  trust: {
    n: 2,
    question: "Czy Twoja organizacja świadczy usługi zaufania (jako dostawca usług zaufania)?",
    help: "Usługi zaufania obejmują m.in. podpisy elektroniczne, pieczęcie elektroniczne, znaczniki czasu, usługi doręczeń elektronicznych.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? "trustQualified" : "tld"),
  },
  trustQualified: {
    n: 3,
    question: "Czy jesteś kwalifikowanym dostawcą usług zaufania?",
    help: "Kwalifikowani dostawcy są wpisani do rejestru nadzorowanego przez krajowy organ (w Polsce: NASK / minister cyfryzacji).",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : { result: "important" }),
  },
  tld: {
    n: 4,
    question: "Czy Twoja organizacja prowadzi rejestr nazw domeny najwyższego poziomu (TLD)?",
    help: "Np. rejestr domen .pl, .eu itp.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "dns"),
  },
  dns: {
    n: 5,
    question: "Czy Twoja organizacja świadczy usługi DNS (systemu nazw domen)?",
    help: "Serwer DNS tłumaczy nazwy domen (np. google.com) na adresy IP. Dotyczy firm takich jak Cloudflare DNS, Google (8.8.8.8) czy operatorów prowadzących własną infrastrukturę DNS.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "ecomms"),
  },
  ecomms: {
    n: 6,
    question:
      "Czy jesteś dostawcą publicznych sieci łączności elektronicznej lub publicznie dostępnych usług łączności elektronicznej?",
    help: "Dotyczy operatorów telekomunikacyjnych, dostawców internetu, operatorów sieci mobilnych itp.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "registrar"),
  },
  registrar: {
    n: 7,
    question:
      "Czy Twoja organizacja świadczy usługi rejestracji nazw domen (działasz jako registrar)?",
    help: "Registrar to firma, która rejestruje domeny internetowe dla klientów — np. nazwa.pl, home.pl, OVH. Nie dotyczy firm, które tylko posiadają własną domenę.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "in-scope-domain" } : "sole"),
  },
  sole: {
    n: 8,
    question:
      "Czy jesteś JEDYNYM dostawcą w państwie członkowskim usługi niezbędnej do utrzymania krytycznej działalności społecznej lub gospodarczej?",
    help: "Art. 2(2)(b) — podmiot jest objęty zakresem niezależnie od wielkości.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "cer"),
  },
  cer: {
    n: 9,
    question:
      "Czy Twoja organizacja została uznana za podmiot krytyczny zgodnie z dyrektywą CER (UE) 2022/2557?",
    help: "Dyrektywa CER dotyczy podmiotów infrastruktury krytycznej (energetyka, transport, bankowość, opieka zdrowotna itp.), które zostały formalnie wyznaczone przez właściwy organ państwowy. Jeśli nie otrzymałeś takiego wyznaczenia, odpowiedz Nie.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "ouk"),
  },
  ouk: {
    n: 10,
    question:
      "Czy Twoja organizacja była wcześniej wyznaczona jako operator usług kluczowych (OUK) zgodnie z poprzednią ustawą KSC?",
    help: "OUK (Operator Usług Kluczowych) to podmiot wyznaczony decyzją administracyjną ministra na podstawie ustawy o Krajowym Systemie Cyberbezpieczeństwa z 2018 r. Jeśli Twoja firma nie dostała takiej decyzji, odpowiedz Nie.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "essential" } : "designated"),
  },
  designated: {
    n: 11,
    question:
      "Czy Twoja organizacja została wyraźnie wyznaczona przez państwo członkowskie jako podmiot kluczowy lub ważny?",
    help: "Na podstawie Art. 2(2)(b)-(e) dyrektywy NIS2 lub krajowej transpozycji.",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? { result: "important" } : "publicAdmin"),
  },
  publicAdmin: {
    n: 12,
    question: "Czy Twoja organizacja jest podmiotem administracji publicznej?",
    type: "yesno",
    options: YESNO,
    next: (v) => (v === "tak" ? "publicAdminLevel" : "sector1"),
  },
  publicAdminLevel: {
    n: 13,
    question: "Na jakim szczeblu działa Twoja jednostka administracji?",
    help: "Szczebel administracji decyduje o zakresie obowiązków.",
    type: "single",
    options: [
      { label: "Administracja rządu centralnego", value: "central" },
      { label: "Administracja szczebla regionalnego", value: "regional" },
      { label: "Administracja lokalna / gminna", value: "local" },
    ],
    next: (v) =>
      v === "central"
        ? { result: "essential" }
        : v === "regional"
          ? { result: "important" }
          : { result: "out-of-scope" },
  },
  sector1: {
    n: 14,
    question:
      "Czy Twoja organizacja działa w którymkolwiek z poniższych sektorów kluczowych (Załącznik I)?",
    help: "Wybierz sektor, w którym Twoja organizacja prowadzi główną działalność. Jeśli żaden nie pasuje, wybierz „Żaden z powyższych”.",
    type: "single",
    options: [...ANNEX_I.map((s) => ({ label: s, value: s })), { label: NONE, value: NONE }],
    next: (v) => (v === NONE ? "sector2" : "emp"),
  },
  sector2: {
    n: 15,
    question: "Czy Twoja organizacja działa w którymś z pozostałych sektorów (Załącznik II)?",
    help: "Jeśli żaden z poniższych sektorów nie pasuje, Twoja organizacja prawdopodobnie pozostaje poza zakresem NIS2.",
    type: "single",
    options: [...ANNEX_II.map((s) => ({ label: s, value: s })), { label: NONE, value: NONE }],
    next: (v) => (v === NONE ? { result: "out-of-scope" } : "emp"),
  },
  emp: {
    n: 16,
    question: "Ile osób zatrudnia Twoja organizacja?",
    type: "single",
    options: [
      { label: "250 lub więcej pracowników", value: "250+" },
      { label: "50–249 pracowników", value: "50-249" },
      { label: "10–49 pracowników", value: "10-49" },
      { label: "Mniej niż 10 pracowników", value: "<10" },
    ],
    next: () => "turnover",
  },
  turnover: {
    n: 17,
    question: "Jaki jest roczny obrót Twojej organizacji?",
    type: "single",
    options: [
      { label: "Powyżej 50 mln EUR", value: ">50" },
      { label: "10–50 mln EUR", value: "10-50" },
      { label: "2–10 mln EUR", value: "2-10" },
      { label: "Poniżej 2 mln EUR", value: "<2" },
    ],
    next: () => "balance",
  },
  balance: {
    n: 18,
    question: "Jaki jest całkowity bilans roczny Twojej organizacji?",
    help: "Suma bilansowa z ostatniego zatwierdzonego sprawozdania finansowego.",
    type: "single",
    options: [
      { label: "Powyżej 43 mln EUR", value: ">43" },
      { label: "10–43 mln EUR", value: "10-43" },
      { label: "Poniżej 10 mln EUR", value: "<10" },
    ],
    next: (v, ans) => ({ result: computeFinalResult({ ...ans, balance: v }) }),
  },
};

export const START_ID = "eu";

// Maps survey answer keys to the question id that sets them, so the engine can
// store sector1 / sector2 / emp / turnover / balance under stable keys.
export const ANSWER_KEY = {
  sector1: "sector1",
  sector2: "sector2",
  emp: "emp",
  turnover: "turnover",
  balance: "balance",
};

export const RESULTS = {
  essential: {
    badge: "Podmiot kluczowy",
    badgeClass: "bg-red-600 text-white",
    accentBar: "bg-red-600",
    heading:
      "Twoja organizacja zostanie zakwalifikowana jako podmiot kluczowy w rozumieniu dyrektywy NIS2. Oznacza to najwyższy poziom obowiązków w zakresie cyberbezpieczeństwa.",
    obligations: [
      "Nadzór ex-ante (proaktywny) przez organ nadzoru",
      "Obowiązkowy audyt w ciągu 24 miesięcy",
      "12 miesięcy na wdrożenie środków zarządzania ryzykiem oraz rozpoczęcie korzystania z systemu S46",
      "6 miesięcy na złożenie wniosku o wpis do wykazu podmiotów kluczowych i ważnych",
      "Raportowanie incydentów: 24h ostrzeżenie → 72h notyfikacja → 1 miesiąc raport końcowy",
    ],
    penalties: [
      "Do 10 mln EUR lub 2% globalnego obrotu rocznie (wyższa wartość)",
      "Kierownictwo — do 300% wynagrodzenia miesięcznego",
      "Kary za naruszenia obowiązków raportowania",
      "Kary za brak wdrożenia wymaganych środków bezpieczeństwa",
    ],
  },
  important: {
    badge: "Podmiot ważny",
    badgeClass: "bg-amber-500 text-black",
    accentBar: "bg-amber-500",
    heading:
      "Twoja organizacja zostanie zakwalifikowana jako podmiot ważny w rozumieniu dyrektywy NIS2. Obejmują Cię obowiązki w zakresie cyberbezpieczeństwa, choć w łagodniejszym reżimie nadzoru niż podmioty kluczowe.",
    obligations: [
      "Nadzór ex-post (reaktywny) — kontrola po wystąpieniu incydentu lub sygnału",
      "Wdrożenie środków zarządzania ryzykiem zgodnych z art. 21 NIS2",
      "12 miesięcy na wdrożenie środków oraz rozpoczęcie korzystania z systemu S46",
      "6 miesięcy na złożenie wniosku o wpis do wykazu podmiotów kluczowych i ważnych",
      "Raportowanie incydentów: 24h ostrzeżenie → 72h notyfikacja → 1 miesiąc raport końcowy",
    ],
    penalties: [
      "Do 7 mln EUR lub 1,4% globalnego obrotu rocznie (wyższa wartość)",
      "Odpowiedzialność kierownictwa za nadzór nad wdrożeniem",
      "Kary za naruszenia obowiązków raportowania",
      "Kary za brak wdrożenia wymaganych środków bezpieczeństwa",
    ],
  },
  "in-scope-domain": {
    badge: "W zakresie (Art. 28)",
    badgeClass: "bg-blue-600 text-white",
    accentBar: "bg-blue-600",
    heading:
      "Twoja organizacja jest objęta szczególnymi obowiązkami z art. 28 NIS2 dotyczącymi rejestracji nazw domen. Dotyczą Cię wymogi przejrzystości danych rejestracyjnych, nawet jeśli nie kwalifikujesz się jako podmiot kluczowy lub ważny.",
    obligations: [
      "Gromadzenie i utrzymywanie dokładnych danych rejestracyjnych domen (WHOIS)",
      "Weryfikacja danych rejestrujących nazwy domen",
      "Udostępnianie danych uprawnionym podmiotom bez zbędnej zwłoki",
      "Publikacja danych rejestracyjnych osób prawnych",
      "Polityka i procedury zapewnienia jakości danych",
    ],
    penalties: [
      "Kary administracyjne za brak utrzymywania bazy danych rejestracyjnych",
      "Kary za nieudostępnianie danych uprawnionym podmiotom",
      "Nadzór organu właściwego ds. cyberbezpieczeństwa",
    ],
  },
  "out-of-scope": {
    badge: "Poza zakresem NIS2",
    badgeClass: "bg-neutral-200 text-black",
    accentBar: "bg-neutral-400",
    heading:
      "Na podstawie udzielonych odpowiedzi Twoja organizacja prawdopodobnie nie jest obecnie objęta dyrektywą NIS2. Warto jednak monitorować sytuację — zmiana sektora, wielkości lub roli rynkowej może to zmienić.",
    obligations: [
      "Brak obowiązków formalnych wynikających z NIS2 na ten moment",
      "Rekomendowane utrzymanie podstawowej higieny cyberbezpieczeństwa",
      "Warto powtórzyć ocenę przy wzroście zatrudnienia lub obrotu",
      "Monitoruj wymogi klientów — duże podmioty NIS2 rozliczają dostawców",
    ],
    penalties: [
      "Brak kar wynikających z NIS2 przy aktualnym statusie",
      "Uwaga: błędna samoocena nie zwalnia z odpowiedzialności w razie kontroli",
    ],
  },
};
