"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../gsap";
import { Kicker } from "../lib";

/* steep.app customer-story band: full light-blue surface, big serif quote
   on the left with a logo tab switcher underneath, visual card on the
   right. Tabs swap between client testimonials. */

export function Quotes({ proof }) {
  const items = proof.items ?? [];
  const [active, setActive] = useState(0);
  const quoteRef = useRef(null);
  const item = items[active] ?? items[0];

  useLayoutEffect(() => {
    if (!quoteRef.current) return;
    const tween = gsap.fromTo(
      quoteRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
    return () => tween.kill();
  }, [active]);

  if (!item) return null;

  return (
    <section className="px-0 py-10 md:px-5">
      <div className="mx-auto max-w-[1400px] bg-steep-light-blue px-6 py-16 md:rounded-[28px] md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Kicker className="mb-6">{proof.h2}</Kicker>
            <div ref={quoteRef} key={active}>
              <blockquote className="mb-4 font-serif text-[26px] leading-[1.15] text-steep-text md:text-[34px]">
                “{item.quote}”
              </blockquote>
              <p className="mb-10 text-[15px] text-steep-gray">
                {item.name} — {item.role}, {item.company}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-trans-15">
              {items.map((it, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`-mt-px border-t-2 pt-3 text-[15px] font-semibold tracking-tight transition-colors ${
                    i === active
                      ? "border-steep-text text-steep-text"
                      : "border-transparent text-steep-text/40 hover:text-steep-text/70"
                  }`}
                  aria-pressed={i === active}
                >
                  {it.company}
                </button>
              ))}
            </div>
          </div>

          <div data-reveal className="hidden items-center justify-center rounded-[20px] bg-[#10224d] p-12 lg:flex lg:min-h-[320px]">
            <img
              key={item.logoSrc}
              src={item.logoSrc}
              alt={item.logoAlt ?? item.company}
              className="max-h-16 w-auto max-w-[70%] object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[1100px] text-[15px] text-steep-gray">{proof.sub}</p>
      </div>
    </section>
  );
}
