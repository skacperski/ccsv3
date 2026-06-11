"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap";
import { VARIANTS } from "../content/variants";
import { initDataLayer, setTrackingVariant, track } from "../tracking/tracking";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Logos } from "./sections/Logos";
import { Scope } from "./sections/Scope";
import { Risk } from "./sections/Risk";
import { Timeline } from "./sections/Timeline";
import { Pillars } from "./sections/Pillars";
import { Steps } from "./sections/Steps";
import { Quotes } from "./sections/Quotes";
import { Pricing } from "./sections/Pricing";
import { Compare } from "./sections/Compare";
import { Faq } from "./sections/Faq";
import { Final } from "./sections/Final";
import { Footer } from "./sections/Footer";

/**
 * awesomic.com-styled landing page built from scratch. Single variant:
 * copy comes verbatim from VARIANTS.default. GSAP drives reveals.
 */
const content = VARIANTS.default;

export default function Awesomic() {
  const root = useRef(null);

  useEffect(() => {
    initDataLayer();
    setTrackingVariant(content.id);
    document.title = content.seo.title;

    const onMessage = (e) => {
      const data = e.data;
      if (typeof data?.event !== "string" || !data.event.startsWith("calendly.")) return;
      if (data.event === "calendly.event_scheduled") {
        track("calendar_request", { source: "calendly" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 26,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 22,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <Nav nav={content.nav} ctaSecondary={content.hero.ctaSecondary} />
      <Hero hero={content.hero} />
      <Logos caption={content.proof.h2} />
      <Scope scope={content.scope} />
      <Risk risk={content.risk} />
      <Timeline timeline={content.timeline} />
      <Pillars service={content.service} />
      <Steps
        how={content.how}
        ctaPrimary={content.hero.ctaPrimary}
        ctaSecondary={content.hero.ctaSecondary}
      />
      <Quotes proof={content.proof} />
      <Pricing pricing={content.pricing} />
      <Compare compare={content.compare} />
      <Faq faq={content.faq} />
      <Final final={content.final} surveyCtaLabel={content.hero.ctaPrimary} />
      <Footer footer={content.footer} />
    </div>
  );
}
