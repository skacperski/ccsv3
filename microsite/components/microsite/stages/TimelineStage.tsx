import type { TimelineStageData } from '@/lib/types';

interface TimelineStageProps {
  data: TimelineStageData;
}

export function TimelineStage({ data }: TimelineStageProps) {
  return (
    <div className="relative bg-paper border border-line-light aspect-[16/7]">
      <div className="absolute inset-0 flex justify-between items-center px-6 font-display font-black text-[14px] tracking-[0.04em] uppercase">
        <div className="leading-[1.1]">
          {data.startLabel}
          <small className="block font-mono font-normal text-[10px] text-muted-dark tracking-[0.1em]">
            {data.startSub}
          </small>
        </div>
        <div className="leading-[1.1] text-right">
          {data.endLabel}
          <small className="block font-mono font-normal text-[10px] text-muted-dark tracking-[0.1em]">
            {data.endSub}
          </small>
        </div>
      </div>
      <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-ink" />
      {data.nodes.map((n) => (
        <span
          key={n.month}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            n.active
              ? 'w-[22px] h-[22px] bg-green border-[1.5px] border-green'
              : 'w-[14px] h-[14px] bg-paper border-[1.5px] border-ink'
          }`}
          style={{ left: `${n.leftPct}%` }}
        />
      ))}
      {data.nodes.map((n) => (
        <span
          key={`${n.month}-label`}
          className="absolute -translate-x-1/2 text-center whitespace-nowrap font-mono text-[10px] tracking-[0.14em] text-muted-dark"
          style={{ left: `${n.leftPct}%`, top: 'calc(50% + 24px)' }}
        >
          <span className="block font-display font-black text-[14px] tracking-[-0.01em] text-ink mb-0.5">
            {n.month}
          </span>
          {n.label}
        </span>
      ))}
      <span className="absolute bottom-[14%] left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.14em] text-ink">
        <span className="bg-ink text-paper px-2 py-1">{data.marker}</span>
      </span>
    </div>
  );
}
