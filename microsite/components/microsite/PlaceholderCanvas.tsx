import type { CardCanvasKind } from '@/lib/types';

interface PlaceholderCanvasProps {
  kind: Exclude<CardCanvasKind, 'stat-blue'>;
  tag: string;
  className?: string;
}

export function PlaceholderCanvas({ kind, tag, className = '' }: PlaceholderCanvasProps) {
  const style: React.CSSProperties =
    kind === 'striped-dark'
      ? {
          background:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 6px, rgba(255,255,255,0.0) 6px 14px), #1a1a1c',
        }
      : kind === 'striped-light'
      ? {
          background:
            'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 6px, rgba(0,0,0,0) 6px 14px), #ededea',
        }
      : kind === 'plain-light'
      ? { background: '#ededea' }
      : { background: '#18181a' };

  const tagTone =
    kind === 'striped-light' || kind === 'plain-light'
      ? 'text-black/50'
      : 'text-white/60';

  return (
    <div
      className={`relative aspect-[4/3] border ${
        kind === 'striped-light' || kind === 'plain-light'
          ? 'border-line-light'
          : 'border-line'
      } ${className}`}
      style={style}
    >
      <span
        className={`absolute left-3 bottom-3 font-mono text-[10px] tracking-[0.14em] uppercase ${tagTone}`}
      >
        {tag}
      </span>
    </div>
  );
}
