import type { Chapter } from '@/lib/types';
import { ReadMore } from './ReadMore';
import { Reveal } from './Reveal';
import { FineStage } from './stages/FineStage';
import { QuizStage } from './stages/QuizStage';
import { ReportStage } from './stages/ReportStage';
import { TimelineStage } from './stages/TimelineStage';
import { StackStage } from './stages/StackStage';
import { BoardStage } from './stages/BoardStage';

interface FeatureBlockProps {
  chapter: Chapter;
}

export function FeatureBlock({ chapter }: FeatureBlockProps) {
  const { subBlock } = chapter;
  const theme = chapter.subBlockTheme;
  if (!subBlock.h3 && subBlock.stage.kind !== 'quiz') return null;

  const kickerTone =
    theme === 'dark'
      ? 'text-paper-quote-dark'
      : theme === 'blue'
      ? 'text-paper-quote-blue'
      : 'text-muted-dark';
  const titleTone =
    theme === 'dark' || theme === 'blue' ? 'text-white' : 'text-ink';

  return (
    <div className="px-6 desktop:px-14 py-8 desktop:py-16">
      <div className="max-w-container mx-auto grid grid-cols-1 desktop:grid-cols-[320px_1fr] gap-8 desktop:gap-12 items-start">
        {subBlock.h3 ? (
          <Reveal delay={1}>
            <div>
              <h3
                className={`font-display font-black text-[28px] tracking-[-0.01em] m-0 mb-3 ${titleTone}`}
              >
                {subBlock.h3}
              </h3>
              <p className={`m-0 mb-6 max-w-[40ch] text-[15px] leading-[1.5] ${kickerTone}`}>
                {subBlock.kicker}
              </p>
              {subBlock.ctaLabel ? (
                <ReadMore
                  label={subBlock.ctaLabel}
                  variant={theme === 'blue' ? 'white' : 'blue'}
                />
              ) : null}
            </div>
          </Reveal>
        ) : (
          <div />
        )}
        <Reveal delay={2}>
          <StageSwitch chapter={chapter} />
        </Reveal>
      </div>
    </div>
  );
}

function StageSwitch({ chapter }: { chapter: Chapter }) {
  const stage = chapter.subBlock.stage;
  switch (stage.kind) {
    case 'fine':
      return <FineStage data={stage.data} />;
    case 'quiz':
      return <QuizStage data={stage.data} />;
    case 'report':
      return <ReportStage data={stage.data} />;
    case 'timeline':
      return <TimelineStage data={stage.data} />;
    case 'stack':
      return <StackStage data={stage.data} />;
    case 'board':
      return <BoardStage data={stage.data} />;
  }
}
