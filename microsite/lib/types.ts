export type StageKind = 'fine' | 'quiz' | 'report' | 'timeline' | 'stack' | 'board';
export type ChapterTheme = 'default' | 'dark' | 'blue' | 'paper';
export type CardCanvasKind = 'striped-dark' | 'striped-light' | 'stat-blue' | 'plain-dark' | 'plain-light';
export type ReadMoreVariant = 'blue' | 'white' | 'ghost';

export interface CardItem {
  canvas:
    | { kind: 'striped-dark' | 'striped-light' | 'plain-dark' | 'plain-light'; tag: string }
    | { kind: 'stat-blue'; bigText: string; smallText: string };
  title: string;
  body: string;
  cta: { label: string; variant: ReadMoreVariant };
}

export interface FeatureTableRow {
  label: string;
  body: string;
  more?: string;
}

export interface ExecQuote {
  name: string;
  role: string;
  /** Plain text. Wrap emphasized phrase(s) in <em>...</em> markers for highlight. */
  quote: string;
}

export interface FineStageData {
  amount: string;
  amountSup: string;
  ticker: string;
  stamps: Array<{ label: string; color: 'blue' | 'red' | 'white'; pos: 's1' | 's2' | 's3' }>;
}

export interface QuizStageData {
  questionLabel: string;
  timeLabel: string;
  questionText: string;
  options: Array<{ label: string; picked?: boolean }>;
  result: { tag: string; entity: string; reason: string };
}

export interface ReportStageData {
  reportStamp: string;
  reportTitle: string;
  pageCode: string;
  score: Array<{ key: string; value: string; tone: 'red' | 'amber' | 'green' }>;
  bars: Array<{ label: string; pct: number; tone: 'r' | 'a' | 'g' }>;
  sticky: { headline: string; bigNumber: string; subline: string };
}

export interface TimelineStageData {
  startLabel: string;
  startSub: string;
  endLabel: string;
  endSub: string;
  nodes: Array<{ month: string; label: string; active?: boolean; leftPct: number }>;
  marker: string;
}

export interface StackStageData {
  alerts: Array<{ ts: string; text: string; pos: 'a1' | 'a2' | 'a3' | 'a4' }>;
}

export interface BoardStageData {
  docNumber: string;
  docStatus: string;
  title: string;
  bullets: string[];
  signLeft: string;
  signRight: string;
  stamp: string;
}

export type StageData =
  | { kind: 'fine'; data: FineStageData }
  | { kind: 'quiz'; data: QuizStageData }
  | { kind: 'report'; data: ReportStageData }
  | { kind: 'timeline'; data: TimelineStageData }
  | { kind: 'stack'; data: StackStageData }
  | { kind: 'board'; data: BoardStageData };

export interface Chapter {
  id: string;
  number: string;
  navLabel: string;
  /** Theme for the hero block (ChapterHead area). */
  heroTheme: ChapterTheme;
  /** Theme for the sub-block (FeatureBlock + cards + table). Often inverts vs hero for visual rhythm. */
  subBlockTheme: ChapterTheme;
  head: {
    title: string;
    lede: string;
    subBlockSubIndex: string;
    primaryCta?: { label: string; href: string };
  };
  exec: ExecQuote;
  subBlock: {
    h3: string;
    kicker: string;
    ctaLabel: string;
    stage: StageData;
  };
  cards: { columns: 3 | 4; items: CardItem[] };
  table: FeatureTableRow[];
}

export interface SiteData {
  brand: { name: string; release: string };
  ctaStrip: { line1: string; line2: string; cta: string };
  footer: {
    legal: string;
    links: Array<{ label: string; href: string }>;
    wordmark: string;
  };
}
