import type { SiteData } from '@/lib/types';

interface FooterProps {
  data: SiteData['footer'];
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-blue text-white px-6 desktop:px-14 pt-8 overflow-hidden">
      <div className="flex flex-col desktop:flex-row gap-3 desktop:gap-0 justify-between font-mono text-[12px] tracking-[0.1em] pb-6">
        <div>{data.legal}</div>
        <div className="flex gap-[18px]">
          {data.links.map((l, i) => (
            <span key={l.label} className="flex items-center gap-[18px]">
              <a href={l.href}>{l.label}</a>
              {i < data.links.length - 1 ? <span>·</span> : null}
            </span>
          ))}
        </div>
      </div>
      <div
        aria-hidden
        className="font-display font-black text-blue-deep select-none whitespace-nowrap leading-[0.78] tracking-[-0.045em] text-[clamp(140px,22vw,340px)] -mx-2 -mb-[0.18em]"
      >
        {data.wordmark}
      </div>
    </footer>
  );
}
