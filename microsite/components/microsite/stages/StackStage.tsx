import type { StackStageData } from '@/lib/types';

interface StackStageProps {
  data: StackStageData;
}

const ALERT_POS: Record<'a1' | 'a2' | 'a3' | 'a4', React.CSSProperties> = {
  a1: { top: '12%', left: '8%' },
  a2: { top: '24%', right: '6%' },
  a3: { bottom: '16%', left: '12%' },
  a4: { bottom: '8%', right: '10%' },
};

export function StackStage({ data }: StackStageProps) {
  return (
    <div className="relative aspect-[16/9] bg-ink overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 22px)',
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="absolute border border-blue rounded-full opacity-[0.15]" style={{ width: '78%', aspectRatio: '1' }} />
        <span className="absolute border border-blue rounded-full opacity-30" style={{ width: '56%', aspectRatio: '1' }} />
        <span className="absolute border border-blue rounded-full opacity-50" style={{ width: '36%', aspectRatio: '1' }} />
        <span
          className="rounded-full"
          style={{
            width: '18%',
            aspectRatio: '1',
            background: 'radial-gradient(circle at 30% 30%, #4a78ff, #0a1f99 70%)',
            boxShadow: '0 0 60px rgba(31,76,255,0.6)',
          }}
        />
      </div>
      {data.alerts.map((a) => (
        <div
          key={a.pos}
          className={`absolute font-mono text-[10px] tracking-[0.14em] text-white px-2 py-1.5 ${
            a.pos === 'a4' ? 'border border-green' : 'border border-blue'
          }`}
          style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(2px)',
            ...ALERT_POS[a.pos],
          }}
        >
          <span className="text-green mr-1.5">{a.ts}</span>
          {a.text}
        </div>
      ))}
    </div>
  );
}
