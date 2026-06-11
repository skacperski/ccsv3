"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { Serif, SurveyCta, CalendarCta } from "../lib";

/* Floating dashboard-style cards (steep.app hero) themed with the three
   hero stats. Charts are decorative chrome around the stat copy. */

function CardBars({ label }) {
  const bars = [38, 62, 46, 78, 58];
  return (
    <div className="w-56 rounded-2xl border border-trans-5 bg-white p-5 shadow-[0_12px_40px_rgba(14,23,43,0.08)]">
      <p className="mb-1 text-[13px] font-medium text-steep-text">{label}</p>
      <p className="mb-4 font-serif text-3xl italic leading-none text-steep-blue">19.02</p>
      <div className="flex h-16 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            data-bar
            className="w-full rounded-sm bg-steep-blue/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function CardDonut({ label }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="w-60 rounded-2xl border border-trans-5 bg-white p-5 shadow-[0_12px_40px_rgba(14,23,43,0.08)]">
      <p className="mb-3 text-[13px] font-medium text-steep-text">{label}</p>
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 80 80" className="size-20 -rotate-90">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#0E172B1A" strokeWidth="9" />
          <circle
            data-donut
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="#E53B79"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * 0.35}
          />
        </svg>
        <div>
          <p className="font-serif text-2xl italic leading-none text-steep-text">2%</p>
          <p className="mt-1 text-xs text-steep-muted">obrotu</p>
        </div>
      </div>
    </div>
  );
}

function CardDots({ label }) {
  return (
    <div className="w-52 rounded-2xl border border-trans-5 bg-white p-5 shadow-[0_12px_40px_rgba(14,23,43,0.08)]">
      <p className="mb-1 text-[13px] font-medium text-steep-text">{label}</p>
      <p className="mb-3 font-serif text-3xl italic leading-none text-steep-green-deep">18</p>
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} data-dot className="size-2.5 rounded-full bg-steep-green/70" />
        ))}
      </div>
    </div>
  );
}

export function Hero({ hero }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-text] > *", { y: 30, autoAlpha: 0, duration: 0.9, stagger: 0.12 })
        .from(
          "[data-float]",
          { y: 60, autoAlpha: 0, duration: 1.1, stagger: 0.15, ease: "power2.out" },
          "-=0.6",
        )
        .from("[data-bar]", { scaleY: 0, transformOrigin: "bottom", stagger: 0.06 }, "-=0.7")
        .from("[data-dot]", { scale: 0, stagger: 0.015 }, "-=0.8")
        .from("[data-donut]", { strokeDashoffset: 2 * Math.PI * 30, duration: 1 }, "-=0.9");

      // Gentle perpetual float, desynced per card.
      gsap.utils.toArray("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 14 : -14,
          duration: 3.2 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Parallax on scroll.
      gsap.to("[data-float]", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden px-5 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="hero-aurora" aria-hidden />

      {/* Floating stat cards — steep's overlapping dashboard mockups */}
      {hero.stats?.[0] && (
        <div data-float className="absolute left-[max(-60px,-4vw)] top-24 z-10 hidden xl:block">
          <CardBars label={hero.stats[0]} />
        </div>
      )}
      {hero.stats?.[2] && (
        <div data-float className="absolute right-[max(-40px,-3vw)] top-40 z-10 hidden xl:block">
          <CardDonut label={hero.stats[2]} />
        </div>
      )}
      {hero.stats?.[1] && (
        <div data-float className="absolute bottom-4 left-[8%] z-10 hidden xl:block">
          <CardDots label={hero.stats[1]} />
        </div>
      )}

      <div data-hero-text className="relative z-20 mx-auto max-w-[820px] text-center">
        <Serif
          as="h1"
          text={hero.h1}
          italicWords={2}
          className="mb-7 text-[44px] leading-[1.02] text-steep-text md:text-[64px] lg:text-[72px]"
        />
        <p className="mx-auto mb-9 max-w-[560px] text-lg leading-snug text-steep-text/80 md:text-[20px]">
          {hero.sub}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <SurveyCta location="hero">{hero.ctaPrimary}</SurveyCta>
          {hero.ctaSecondary && (
            <CalendarCta variant="link" location="hero" className="font-normal">
              {hero.ctaSecondary}
            </CalendarCta>
          )}
        </div>
        {hero.micro && <p className="mt-6 text-sm text-steep-muted">{hero.micro}</p>}

        {/* Stats fallback for viewports without the floating cards */}
        {hero.stats && (
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 xl:hidden">
            {hero.stats.map((stat, i) => (
              <li key={i} className="inline-flex items-center gap-2 text-sm font-medium text-steep-text">
                <span className="size-1.5 rounded-full bg-steep-green" aria-hidden />
                {stat}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
