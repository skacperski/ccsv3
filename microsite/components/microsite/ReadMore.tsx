import type { ReadMoreVariant } from '@/lib/types';

interface ReadMoreProps {
  href?: string;
  label: string;
  variant?: ReadMoreVariant;
  className?: string;
}

export function ReadMore({ href = '#', label, variant = 'blue', className = '' }: ReadMoreProps) {
  const base =
    'inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.08em] uppercase mt-3';
  const variants: Record<ReadMoreVariant, string> = {
    blue: 'bg-blue text-white px-3 py-1.5',
    white: 'bg-white text-blue px-3 py-1.5',
    ghost: 'border-b border-current pb-[2px]',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {label}
      <span aria-hidden className="text-[14px] leading-none">›</span>
    </a>
  );
}
