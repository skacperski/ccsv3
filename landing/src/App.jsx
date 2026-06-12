import React, { useEffect, useState } from "react";
import { VARIANTS, resolveVariantId } from "./content/variants";
import { VariantBar } from "./components/VariantBar";
import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { Risk } from "./components/Risk";
import { Timeline } from "./components/Timeline";
import { Pillars } from "./components/Pillars";
import { Steps } from "./components/Steps";
import { Quotes } from "./components/Quotes";
import { Pricing } from "./components/Pricing";
import { Compare } from "./components/Compare";
import { Faq } from "./components/Faq";
import { Survey } from "./components/Survey";

export default function App() {
  // Variant per ad campaign: ?variant=<id> wins, then ?utm_campaign=<campaign>,
  // fallback "default". Copy lives in src/content/variants.ts.
  const [variantId, setVariantId] = useState(() =>
    resolveVariantId(window.location.search),
  );
  const c = VARIANTS[variantId];

  useEffect(() => {
    document.title = c.seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", c.seo.description);
  }, [c]);

  const handleVariantChange = (id) => {
    setVariantId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", id);
    window.history.replaceState({}, "", url);
  };

  return (
    <>
      {/* key remounts sections so GSAP reveals re-init for the new copy */}
      <main key={variantId}>
        <Hero hero={c.hero} nav={c.nav} />
        <LogoMarquee logos={c.logos} />
        <Risk risk={c.risk} />
        <Timeline timeline={c.timeline} />
        <Pillars service={c.service} />
        <Steps how={c.how} ctaPrimary={c.hero.ctaPrimary} ctaSecondary={c.hero.ctaSecondary} />
        <Quotes proof={c.proof} />
        <Pricing pricing={c.pricing} />
        {!c.hideCompare && <Compare compare={c.compare} />}
        <Faq faq={c.faq} />
        <Survey final={c.final} surveyCtaLabel={c.hero.ctaPrimary} footer={c.footer} />
      </main>
      <VariantBar current={variantId} onChange={handleVariantChange} />
    </>
  );
}
