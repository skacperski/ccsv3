import type { BoardStageData } from '@/lib/types';

interface BoardStageProps {
  data: BoardStageData;
}

export function BoardStage({ data }: BoardStageProps) {
  return (
    <div
      className="relative aspect-[16/10] bg-blue p-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 32px)',
      }}
    >
      <div
        className="absolute bg-white text-ink p-6 grid gap-3.5"
        style={{
          inset: '12% 12% 12% 12%',
          gridTemplateRows: 'auto auto 1fr auto',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        }}
      >
        <div className="flex justify-between items-start font-mono text-[9px] text-muted tracking-[0.14em] whitespace-pre-line">
          <div>{data.docNumber.replace(' / ', '\n')}</div>
          <div className="text-right">{data.docStatus.replace(' / ', '\n')}</div>
        </div>
        <h5 className="font-display font-black text-[20px] leading-[1.1] tracking-[-0.01em] m-0">
          {data.title}
        </h5>
        <ul className="list-none p-0 m-0 grid gap-1.5">
          {data.bullets.map((b) => (
            <li key={b} className="grid grid-cols-[16px_1fr] gap-2 text-[11px] leading-[1.4]">
              <span className="text-green font-bold">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t border-line-light pt-2.5 font-mono text-[9px] text-muted tracking-[0.14em]">
          <div>
            {data.signLeft}
            <div className="border-t border-ink w-24 mt-[18px]" />
          </div>
          <div className="text-right">
            {data.signRight}
            <div className="border-t border-ink w-24 mt-[18px] ml-auto" />
          </div>
        </div>
      </div>
      <div
        className="absolute right-[6%] top-[8%] font-display font-black text-red-stamp px-3.5 py-2 text-[22px] tracking-[0.04em]"
        style={{
          border: '3px solid #ff3030',
          transform: 'rotate(-10deg)',
          background: 'rgba(255,255,255,0.05)',
        }}
      >
        {data.stamp}
      </div>
    </div>
  );
}
