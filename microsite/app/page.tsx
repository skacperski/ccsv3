import { TopNav } from '@/components/microsite/TopNav';
import { ChapterHead } from '@/components/microsite/ChapterHead';
import { SubIndex } from '@/components/microsite/SubIndex';
import { FeatureBlock } from '@/components/microsite/FeatureBlock';
import { CardGrid } from '@/components/microsite/CardGrid';
import { FeatureTable } from '@/components/microsite/FeatureTable';
import { CTAStrip } from '@/components/microsite/CTAStrip';
import { Footer } from '@/components/microsite/Footer';
import { Reveal } from '@/components/microsite/Reveal';
import { chapters, site } from '@/content/chapters';
import type { Chapter, ChapterTheme } from '@/lib/types';

const THEME_CLASS: Record<ChapterTheme, string> = {
  default: 'bg-paper text-ink',
  paper: 'bg-paper text-ink',
  dark: 'bg-ink text-paper',
  blue: 'bg-blue text-white',
};

const BLUE_GRID = {
  backgroundImage:
    'repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 32px)',
};

export default function HomePage() {
  return (
    <>
      <TopNav
        brand={site.brand}
        chapters={chapters.map((c) => ({ id: c.id, number: c.number, navLabel: c.navLabel }))}
      />
      <a id="top" />
      <main>
        {chapters.map((ch) => (
          <ChapterContainer key={ch.id} chapter={ch} />
        ))}
        <CTAStrip {...site.ctaStrip} />
        <Footer data={site.footer} />
      </main>
    </>
  );
}

function ChapterContainer({ chapter }: { chapter: Chapter }) {
  const sameTheme = chapter.heroTheme === chapter.subBlockTheme;
  return (
    <>
      <section
        id={chapter.id}
        className={`${THEME_CLASS[chapter.heroTheme]} px-6 py-16 desktop:px-14 ${
          sameTheme ? 'desktop:pt-24 desktop:pb-12' : 'desktop:py-24'
        }`}
        style={chapter.heroTheme === 'blue' ? BLUE_GRID : undefined}
      >
        <div className="max-w-container mx-auto">
          <ChapterHead chapter={chapter} />
        </div>
      </section>
      <section
        className={`${THEME_CLASS[chapter.subBlockTheme]} ${
          sameTheme ? 'pt-0' : 'pt-16 desktop:pt-20'
        } pb-12 desktop:pb-20`}
        style={chapter.subBlockTheme === 'blue' ? BLUE_GRID : undefined}
      >
        {chapter.subBlock.h3 ? (
          <Reveal>
            <div className="px-6 desktop:px-14">
              <SubIndex
                label={chapter.head.subBlockSubIndex}
                theme={chapter.subBlockTheme}
              />
            </div>
          </Reveal>
        ) : null}
        <FeatureBlock chapter={chapter} />
        {chapter.cards.items.length > 0 ? (
          <CardGrid
            columns={chapter.cards.columns}
            items={chapter.cards.items}
            theme={chapter.subBlockTheme}
          />
        ) : null}
        {chapter.table.length > 0 ? (
          <FeatureTable rows={chapter.table} theme={chapter.subBlockTheme} />
        ) : null}
      </section>
    </>
  );
}
