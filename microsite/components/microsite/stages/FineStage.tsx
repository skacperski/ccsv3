import type { FineStageData } from '@/lib/types';

interface FineStageProps {
  data: FineStageData;
}

const STAMP_POS: Record<'s1' | 's2' | 's3', React.CSSProperties> = {
  s1: { top: '10%', left: '8%', transform: 'rotate(-3deg)' },
  s2: { top: '8%', right: '7%', transform: 'rotate(2deg)' },
  s3: { bottom: '12%', right: '10%', transform: 'rotate(-1deg)' },
};

const STAMP_COLOR: Record<'blue' | 'red' | 'white', { color: string; borderColor: string }> = {
  blue: { color: '#1f4cff', borderColor: '#1f4cff' },
  red: { color: '#ff5050', borderColor: '#ff5050' },
  white: { color: '#fff', borderColor: '#fff' },
};

export function FineStage({ data }: FineStageProps) {
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden"
      style={{
        background: 'radial-gradient(120% 80% at 50% 0%, #15151a 0%, #0a0a0a 70%)',
      }}
    >
      {data.stamps.map((s) => (
        <span
          key={s.pos}
          className="absolute font-mono text-[10px] tracking-[0.18em] px-2 py-1 uppercase"
          style={{
            border: `1px solid ${STAMP_COLOR[s.color].borderColor}`,
            color: STAMP_COLOR[s.color].color,
            ...STAMP_POS[s.pos],
          }}
        >
          {s.label}
        </span>
      ))}
      <div
        className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2 font-display font-black text-white tracking-[-0.04em]"
        style={{
          fontSize: 'clamp(64px, 9vw, 152px)',
          textShadow: '0 0 60px rgba(31,76,255,0.5)',
        }}
      >
        {data.amount}
        <sup
          className="font-mono text-blue ml-2 tracking-[0.04em] align-top"
          style={{ fontSize: '0.32em' }}
        >
          {data.amountSup}
        </sup>
      </div>
      <div
        className="absolute left-1/2 top-[64%] -translate-x-1/2 font-mono text-center text-[12px] tracking-[0.14em] leading-[1.6]"
        style={{ color: '#b8b8b3' }}
      >
        {data.ticker}
      </div>
      <div
        className="absolute"
        style={{
          inset: '60% 0 0 0',
          background:
            'linear-gradient(180deg, rgba(0,0,0,0), #0a0a0a 80%), repeating-linear-gradient(0deg, rgba(31,76,255,0.25) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(31,76,255,0.25) 0 1px, transparent 1px 28px)',
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'top center',
        }}
      />
    </div>
  );
}
