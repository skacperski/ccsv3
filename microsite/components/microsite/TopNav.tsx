'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import type { Chapter, SiteData } from '@/lib/types';

interface TopNavProps {
  brand: SiteData['brand'];
  chapters: Pick<Chapter, 'id' | 'number' | 'navLabel'>[];
}

export function TopNav({ brand, chapters }: TopNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + 120;
      let foundId: string | null = null;
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el && el.offsetTop <= y) foundId = ch.id;
      }
      setActiveId(foundId);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [chapters]);

  function handleClick(ev: MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    ev.preventDefault();
    window.scrollTo({ top: el.offsetTop - 44, behavior: 'smooth' });
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-ink text-paper font-mono text-[11px] font-medium tracking-[0.04em] border-b border-line"
      aria-label="Sekcje strony"
    >
      <div className="grid grid-cols-[160px_repeat(6,minmax(0,1fr))] desktop:grid-cols-[200px_repeat(6,minmax(0,1fr))] overflow-x-auto desktop:overflow-visible">
        <a
          href="#top"
          className="flex items-center gap-1 h-11 px-4 border-r border-line whitespace-nowrap font-display text-[14px] font-black tracking-[-0.01em]"
        >
          <span>{brand.name}</span>
          <span className="text-blue mx-[2px]">/</span>
          <span className="text-paper">{brand.release}</span>
        </a>
        {chapters.map((ch) => {
          const isActive = activeId === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              onClick={(ev) => handleClick(ev, ch.id)}
              data-target={ch.id}
              className={`flex items-center gap-2 h-11 px-4 border-r border-line whitespace-nowrap transition-colors duration-150 last:border-r-0 ${
                isActive
                  ? 'bg-paper text-ink'
                  : 'hover:bg-blue hover:text-white'
              }`}
            >
              <span className={isActive ? 'text-muted-dark' : 'text-muted'}>
                {ch.number}.
              </span>
              {ch.navLabel}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
