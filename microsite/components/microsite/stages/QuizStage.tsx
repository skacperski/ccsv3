import type { QuizStageData } from '@/lib/types';

interface QuizStageProps {
  data: QuizStageData;
}

export function QuizStage({ data }: QuizStageProps) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden"
      style={{
        background: 'rgba(0,0,0,0.18)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <div
        className="absolute bg-white text-ink rounded-[4px] p-6 grid gap-3.5 content-start"
        style={{
          inset: '8% 18% 8% 8%',
          boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.14em] text-muted">
          <span>{data.questionLabel}</span>
          <span>{data.timeLabel}</span>
        </div>
        <div className="font-display font-black text-[22px] leading-[1.1] mt-1 mb-1.5">
          {data.questionText}
        </div>
        <div className="grid gap-2 mt-1">
          {data.options.map((opt, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-3 py-2.5 text-[13px] ${
                opt.picked
                  ? 'bg-blue text-white border border-blue'
                  : 'border border-line-light'
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`w-3 h-3 rounded-full ${
                  opt.picked
                    ? 'bg-white border-[1.5px] border-white'
                    : 'border-[1.5px] border-muted'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="h-[3px] bg-paper-2 relative mt-2">
          <span className="absolute inset-0 bg-green" style={{ width: '62%' }} />
        </div>
      </div>
      <div
        className="absolute bg-ink text-white border border-blue p-3.5 font-mono text-[11px] leading-[1.5]"
        style={{
          right: '4%',
          top: '22%',
          width: '36%',
          transform: 'rotate(2deg)',
          boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
        }}
      >
        <span className="inline-block bg-green text-ink px-1.5 py-[2px] font-bold tracking-[0.08em]">
          {data.result.tag}
        </span>
        <strong className="block font-display text-[18px] mt-1.5 tracking-[-0.01em] not-italic font-black">
          {data.result.entity}
        </strong>
        {data.result.reason}
      </div>
    </div>
  );
}
