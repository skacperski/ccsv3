import type { CardItem, ChapterTheme } from '@/lib/types';
import { ReadMore } from './ReadMore';
import { PlaceholderCanvas } from './PlaceholderCanvas';

interface CardProps {
  item: CardItem;
  theme: ChapterTheme;
}

export function Card({ item, theme }: CardProps) {
  const bodyTone: Record<ChapterTheme, string> = {
    default: 'text-muted-dark',
    paper: 'text-muted-dark',
    dark: 'text-card-body-dark',
    blue: 'text-paper-quote-blue',
  };
  const titleTone: Record<ChapterTheme, string> = {
    default: 'text-ink',
    paper: 'text-ink',
    dark: 'text-paper',
    blue: 'text-white',
  };

  return (
    <div className="grid gap-3.5">
      {item.canvas.kind === 'stat-blue' ? (
        <StatCanvas big={item.canvas.bigText} small={item.canvas.smallText} />
      ) : (
        <PlaceholderCanvas kind={item.canvas.kind} tag={item.canvas.tag} />
      )}
      <h4 className={`font-display font-black text-[17px] m-0 ${titleTone[theme]}`}>
        {item.title}
      </h4>
      <p className={`m-0 text-[14px] leading-[1.45] max-w-[36ch] ${bodyTone[theme]}`}>
        {item.body}
      </p>
      <ReadMore label={item.cta.label} variant={item.cta.variant} />
    </div>
  );
}

function StatCanvas({ big, small }: { big: string; small: string }) {
  return (
    <div
      className="relative aspect-[4/3] grid place-items-center font-mono text-white border border-white/20"
      style={{ background: 'rgba(0,0,0,0.18)' }}
    >
      <div className="text-center">
        <div className="font-display font-black text-[36px] tracking-[-0.02em] leading-none">
          {big}
        </div>
        <div className="text-[10px] tracking-[0.16em] mt-1 text-paper-quote-blue">
          {small}
        </div>
      </div>
    </div>
  );
}
