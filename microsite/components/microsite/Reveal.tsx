'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: 'div' | 'p' | 'section' | 'article' | 'header' | 'footer';
}

const delayMap: Record<NonNullable<RevealProps['delay']>, string> = {
  0: 'delay-0',
  1: 'delay-[80ms]',
  2: 'delay-[160ms]',
  3: 'delay-[240ms]',
  4: 'delay-[320ms]',
  5: 'delay-[400ms]',
};

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base =
    'transition-[opacity,transform] duration-700 ease-reveal will-change-[opacity,transform]';
  const state = shown
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-5';

  return (
    <Tag
      ref={ref as never}
      className={`${base} ${delayMap[delay]} ${state} ${className}`}
    >
      {children}
    </Tag>
  );
}
