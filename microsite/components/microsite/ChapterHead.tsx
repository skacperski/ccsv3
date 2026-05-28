import type { Chapter } from '@/lib/types';
import { ExecCard } from './ExecCard';
import { ReadMore } from './ReadMore';
import { Reveal } from './Reveal';

interface ChapterHeadProps {
  chapter: Chapter;
}

export function ChapterHead({ chapter }: ChapterHeadProps) {
  const theme = chapter.heroTheme;
  const ledeTone =
    theme === 'dark'
      ? 'text-paper-quote-dark'
      : theme === 'blue'
      ? 'text-paper-quote-blue'
      : 'text-muted-dark';

  const titleTone = theme === 'dark' || theme === 'blue' ? 'text-white' : 'text-ink';

  return (
    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-20 items-start">
      <div>
        <Reveal as="p">
          <span className="block font-mono text-[13px] tracking-[0.05em] text-muted mb-6">
            {chapter.number}/
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1
            className={`font-display font-black m-0 mb-7 leading-[0.95] tracking-[-0.03em] text-[clamp(48px,6vw,88px)] text-balance ${titleTone}`}
          >
            {chapter.head.title.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={`m-0 text-[18px] leading-[1.45] max-w-[30ch] ${ledeTone}`}>
            {chapter.head.lede}
          </p>
        </Reveal>
        {chapter.head.primaryCta ? (
          <Reveal delay={2}>
            <div className="mt-6">
              <ReadMore
                label={chapter.head.primaryCta.label}
                href={chapter.head.primaryCta.href}
                variant="white"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
      <Reveal delay={2}>
        <ExecCard quote={chapter.exec} theme={theme} />
      </Reveal>
    </div>
  );
}
