import React from "react";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { LogoMarquee } from "./sections/LogoMarquee";
import { Risk, Scope, Timeline, Pillars, Steps, Quotes } from "./sections/Sections";
import { Pricing } from "./sections/Pricing";
import { Compare } from "./sections/Compare";
import { Faq } from "./sections/Faq";
import { Survey } from "./sections/Survey";
import { Footer } from "./sections/Footer";

/**
 * Steep-style page (steep.app): white canvas, Newsreader serif display,
 * pill buttons, tinted feature cards. Consumes the same Content contract
 * as the relume page — copy comes from variants.ts untouched.
 */
export default function Page({ content }) {
  return (
    <div>
      <Nav nav={content.nav} />
      <Hero hero={content.hero} />
      <LogoMarquee caption={content.proof.h2} />
      <Risk risk={content.risk} />
      <Scope scope={content.scope} />
      <Timeline timeline={content.timeline} />
      <Pillars service={content.service} />
      <Steps
        how={content.how}
        ctaPrimary={content.hero.ctaPrimary}
        ctaSecondary={content.hero.ctaSecondary}
      />
      <Quotes proof={content.proof} />
      <Pricing pricing={content.pricing} />
      {!content.hideCompare && <Compare compare={content.compare} />}
      <Faq faq={content.faq} />
      <Survey final={content.final} surveyCtaLabel={content.hero.ctaPrimary} />
      <Footer footer={content.footer} />
    </div>
  );
}
