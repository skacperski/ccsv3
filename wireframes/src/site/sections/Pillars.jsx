"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { LuFileText, LuNetwork, LuUsers, LuShieldAlert } from "react-icons/lu";
import { gsap } from "../gsap";
import { Serif, Kicker, SurveyCta } from "../lib";

/* steep.app "Engage everyone" product layout: left column with serif
   heading, copy, CTA and a hairline tab list; right column shows the
   active item inside a large rounded gray panel. */

const PILLAR_ICONS = [LuFileText, LuNetwork, LuUsers, LuShieldAlert];

export function Pillars({ service, cta }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  const pillars = service.pillars ?? [];
  const pillar = pillars[active] ?? pillars[0];
  const Icon = PILLAR_ICONS[active % PILLAR_ICONS.length];

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const tween = gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
    );
    return () => tween.kill();
  }, [active]);

  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
        <div data-reveal>
          <Kicker className="mb-4">{service.kicker}</Kicker>
          <Serif
            text={service.h2}
            italicWords={3}
            className="mb-5 text-[36px] leading-[1.05] text-steep-text md:text-[44px]"
          />
          <p className="mb-7 text-[16px] leading-relaxed text-steep-gray">{service.sub}</p>
          <SurveyCta location="rozwiazanie" variant="ghost" className="mb-10">
            {cta} <span aria-hidden>→</span>
          </SurveyCta>

          <div>
            {pillars.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`block w-full border-t border-trans-10 py-4 text-left transition-colors last:border-b ${
                  i === active ? "text-steep-text" : "text-steep-muted hover:text-steep-gray"
                }`}
                aria-pressed={i === active}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-[16px] font-medium">{p.label}</span>
                  <span className="text-xs">{p.num}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div data-reveal className="min-h-[380px] rounded-[24px] bg-steep-light-gray p-8 md:p-12 lg:min-h-[460px]">
          <div ref={panelRef} key={active}>
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white">
              <Icon className="size-5 text-steep-text" strokeWidth={1.5} />
            </span>
            <p className="mb-2 text-sm text-steep-muted">{pillar.num}</p>
            <h3 className="mb-4 font-serif text-[28px] italic leading-[1.1] text-steep-text md:text-[34px]">
              {pillar.h2}
            </h3>
            <p className="max-w-md text-[16px] leading-relaxed text-steep-gray">{pillar.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
