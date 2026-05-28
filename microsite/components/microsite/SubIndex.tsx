import type { ChapterTheme } from '@/lib/types';

interface SubIndexProps {
  label: string;
  theme: ChapterTheme;
  className?: string;
}

export function SubIndex({ label, theme, className = '' }: SubIndexProps) {
  const tone: Record<ChapterTheme, string> = {
    default: 'text-muted',
    paper: 'text-muted-dark',
    dark: 'text-[#6a6a66]',
    blue: 'text-[#c4ccff]',
  };
  return (
    <p
      className={`font-mono text-[12px] tracking-[0.06em] mb-6 ${tone[theme]} ${className}`}
    >
      {label}
    </p>
  );
}
