import type { ChapterTheme, FeatureTableRow } from '@/lib/types';
import { Reveal } from './Reveal';

interface FeatureTableProps {
  rows: FeatureTableRow[];
  theme: ChapterTheme;
}

export function FeatureTable({ rows, theme }: FeatureTableProps) {
  if (rows.length === 0) return null;

  const bodyTone: Record<ChapterTheme, string> = {
    default: 'text-muted-dark',
    paper: 'text-muted-dark',
    dark: 'text-card-body-dark',
    blue: 'text-paper-quote-blue',
  };
  const labelTone: Record<ChapterTheme, string> = {
    default: 'text-ink',
    paper: 'text-ink',
    dark: 'text-paper',
    blue: 'text-white',
  };
  const borderTone =
    theme === 'default' || theme === 'paper' ? 'border-line-light' : 'border-line';

  return (
    <div className="max-w-container mx-auto px-6 desktop:px-14 pt-6 grid grid-cols-1 desktop:grid-cols-2 desktop:gap-x-20">
      {rows.map((row, i) => (
        <Reveal key={i} delay={(i % 2) as 0 | 1}>
          <div
            className={`grid grid-cols-1 desktop:grid-cols-[200px_1fr] py-7 border-t ${borderTone} gap-x-6 gap-y-2`}
          >
            <div
              className={`font-display font-bold text-[14px] leading-[1.3] ${labelTone[theme]}`}
            >
              {row.label}
            </div>
            <div className={`text-[14px] leading-[1.5] ${bodyTone[theme]}`}>
              <p className="m-0">{row.body}</p>
              {row.more ? (
                <a
                  href="#"
                  className="block mt-2.5 font-mono text-[11px] tracking-[0.08em] uppercase border-b border-current pb-[2px] w-max"
                >
                  {row.more} ›
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
