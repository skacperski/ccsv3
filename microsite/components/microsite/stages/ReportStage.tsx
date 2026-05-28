import type { ReportStageData } from '@/lib/types';

interface ReportStageProps {
  data: ReportStageData;
}

const SCORE_TONE: Record<'red' | 'amber' | 'green', string> = {
  red: 'text-red-stamp',
  amber: 'text-amber',
  green: 'text-green',
};

const BAR_TONE: Record<'r' | 'a' | 'g', string> = {
  r: 'bg-red-stamp',
  a: 'bg-amber',
  g: 'bg-green',
};

export function ReportStage({ data }: ReportStageProps) {
  return (
    <div className="relative aspect-[16/9] bg-[#ededea] p-6">
      <div className="bg-white text-ink p-5 grid gap-3 h-full" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}>
        <div className="flex justify-between items-start border-b border-line-light pb-2.5">
          <div>
            <div className="font-mono text-[9px] tracking-[0.16em] text-muted">{data.reportStamp}</div>
            <h5 className="font-display font-black text-[16px] mt-1">{data.reportTitle}</h5>
          </div>
          <div className="font-mono text-[9px] tracking-[0.16em] text-muted text-right whitespace-pre-line">
            {data.pageCode.replace(' / ', '\n')}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {data.score.map((c) => (
            <div key={c.key} className="border border-line-light p-2 text-left">
              <div className="font-mono text-[9px] text-muted tracking-[0.12em] uppercase">
                {c.key}
              </div>
              <div className={`font-display font-black text-[22px] mt-1 ${SCORE_TONE[c.tone]}`}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-[5px]">
          {data.bars.map((b) => (
            <div
              key={b.label}
              className="grid grid-cols-[80px_1fr_28px] gap-2 items-center text-[10px] font-mono"
            >
              <span>{b.label}</span>
              <span className="h-1.5 bg-paper-2 relative block">
                <span
                  className={`absolute inset-0 ${BAR_TONE[b.tone]}`}
                  style={{ width: `${b.pct}%` }}
                />
              </span>
              <span>{b.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute bg-blue text-white p-4 font-mono text-[11px]"
        style={{
          right: '-4%',
          bottom: '6%',
          width: '38%',
          transform: 'rotate(-2deg)',
          boxShadow: '0 20px 30px rgba(0,0,0,0.4)',
        }}
      >
        {data.sticky.headline}
        <br />
        <strong className="block font-display font-black text-[26px] tracking-[-0.02em] mb-1 not-italic">
          {data.sticky.bigNumber}
        </strong>
        {data.sticky.subline}
      </div>
    </div>
  );
}
