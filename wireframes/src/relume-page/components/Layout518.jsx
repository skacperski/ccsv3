"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FuseKicker } from "./FuseKicker";

function useRiskScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cards slide in (translateX 100% → 0%), staggered. Spread across the full scroll so
  // the last card settles at ~0.95 — the section releases right after, no dead scroll.
  // Inputs are monotonic [0,1].
  const cardX0 = useTransform(scrollYProgress, [0, 0.13, 0.36, 1], ["100%", "100%", "0%", "0%"]);
  const cardX1 = useTransform(scrollYProgress, [0, 0.26, 0.56, 1], ["100%", "100%", "0%", "0%"]);
  const cardX2 = useTransform(scrollYProgress, [0, 0.39, 0.75, 1], ["100%", "100%", "0%", "0%"]);
  const cardX3 = useTransform(scrollYProgress, [0, 0.52, 0.95, 1], ["100%", "100%", "0%", "0%"]);

  return { containerRef, cardPositions: [cardX0, cardX1, cardX2, cardX3] };
}

function NumberedCard({ index, text }) {
  return (
    <div className="flex w-full items-start gap-3 rounded-lg bg-vent-paper p-5">
      <span className="font-display text-sm leading-6 text-vent-orange">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-base font-medium leading-snug text-vent-carbon xl:text-lg">
        {text}
      </h3>
    </div>
  );
}

export function Layout518({ risk }) {
  const scroll = useRiskScroll();
  const cards = risk.cards ?? [];

  return (
    <section
      id="risk"
      ref={scroll.containerRef}
      className="relative bg-vent-mist px-[5%] py-16 md:px-0 md:py-24 lg:h-[240vh] lg:py-0"
    >
      {/* Mobile / tablet — static, no scroll animation */}
      <div className="lg:hidden">
        <div className="relative mb-6 flex items-center justify-center overflow-hidden rounded-lg bg-vent-paper px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-md text-center">
            <FuseKicker className="mb-3 justify-center md:mb-4">{risk.kicker}</FuseKicker>
            <h2 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl">{risk.h2}</h2>
            <p className="text-vent-graphite md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-5">
          {cards.map((card, i) => (
            <NumberedCard key={i} index={i} text={card} />
          ))}
        </div>
      </div>

      {/* Desktop — sticky reveal. Left panel constant (white card on mist),
          right cards slide in at a constant width. Sticky element is a DIRECT child
          of the 240vh section so its containing block is tall enough to scroll. */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-stretch lg:gap-6 lg:overflow-hidden lg:p-6">
        <div className="flex w-[52vw] items-center justify-center rounded-lg bg-vent-paper px-12">
          <div className="max-w-md text-center">
            <FuseKicker className="mb-3 justify-center">{risk.kicker}</FuseKicker>
            <h2 className="mb-5 text-7xl text-vent-carbon lg:text-8xl">{risk.h2}</h2>
            <p className="text-vent-graphite md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4 px-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={{ x: scroll.cardPositions[Math.min(i, scroll.cardPositions.length - 1)] }}
              className="w-full"
            >
              <NumberedCard index={i} text={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
