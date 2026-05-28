import type { CardItem, ChapterTheme } from '@/lib/types';
import { Card } from './Card';
import { Reveal } from './Reveal';

interface CardGridProps {
  columns: 3 | 4;
  items: CardItem[];
  theme: ChapterTheme;
  className?: string;
}

export function CardGrid({ columns, items, theme, className = '' }: CardGridProps) {
  const cols =
    columns === 4
      ? 'grid-cols-1 desktop:grid-cols-4'
      : 'grid-cols-1 desktop:grid-cols-3';
  return (
    <div
      className={`max-w-container mx-auto px-6 desktop:px-14 pb-8 desktop:pb-14 grid gap-6 ${cols} ${className}`}
    >
      {items.map((item, i) => (
        <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
          <Card item={item} theme={theme} />
        </Reveal>
      ))}
    </div>
  );
}
