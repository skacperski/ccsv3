import type { ChapterTheme, ExecQuote } from '@/lib/types';
import { ExecStill } from './ExecStill';

interface ExecCardProps {
  quote: ExecQuote;
  theme: ChapterTheme;
}

export function ExecCard({ quote, theme }: ExecCardProps) {
  if (!quote.name && !quote.quote) return null;

  const body: Record<ChapterTheme, string> = {
    default: 'text-muted-dark',
    paper: 'text-muted-dark',
    dark: 'text-paper-quote-dark',
    blue: 'text-paper-quote-blue',
  };
  const emphasis: Record<ChapterTheme, string> = {
    default: 'text-ink',
    paper: 'text-ink',
    dark: 'text-paper',
    blue: 'text-white',
  };

  return (
    <div className="grid gap-[18px]">
      <ExecStill name={quote.name} role={quote.role} />
      <p
        className={`text-[15px] leading-[1.5] max-w-[56ch] ${body[theme]}`}
      >
        {parseEmphasis(quote.quote).map((seg, i) =>
          seg.em ? (
            <em key={i} className={`not-italic ${emphasis[theme]}`}>
              {seg.text}
            </em>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>
    </div>
  );
}

function parseEmphasis(input: string): Array<{ text: string; em: boolean }> {
  const segments: Array<{ text: string; em: boolean }> = [];
  const re = /<em>(.*?)<\/em>/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input)) !== null) {
    if (m.index > lastIndex) {
      segments.push({ text: input.slice(lastIndex, m.index), em: false });
    }
    segments.push({ text: m[1], em: true });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex), em: false });
  }
  return segments;
}
