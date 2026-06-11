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
    <div className="flex w-full items-start gap-3 border border-fuse-line bg-white p-5">
      <span className="font-mono text-sm font-medium leading-6 text-fuse-blue">
        {String(index + 1).padStart(3, "0")} /
      </span>
      <h3 className="text-base font-bold leading-snug xl:text-lg">{text}</h3>
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
      className="relative bg-white px-[5%] py-16 md:px-0 md:py-24 lg:h-[240vh] lg:py-0"
    >
      {/* Mobile / tablet — static, no scroll animation */}
      <div className="lg:hidden">
        <div className="relative mb-6 flex items-center justify-center overflow-hidden bg-fuse-ink px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-md text-center text-white">
            <FuseKicker num="03" className="mb-3 text-fuse-lime md:mb-4">
              {risk.kicker}
            </FuseKicker>
            <h2 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl">{risk.h2}</h2>
            <p className="text-white/80 md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, i) => (
            <NumberedCard key={i} index={i} text={card} />
          ))}
        </div>
      </div>

      {/* Desktop — sticky reveal. Left panel constant (full ink, fixed width),
          right cards slide in at a constant width. Sticky element is a DIRECT child
          of the 240vh section so its containing block is tall enough to scroll. */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-stretch lg:overflow-hidden">
        <div className="flex w-[55vw] items-center justify-center bg-fuse-ink px-12">
          <div className="max-w-md text-center text-white">
            <FuseKicker num="03" className="mb-3 text-fuse-lime">
              {risk.kicker}
            </FuseKicker>
            <h2 className="mb-5 text-7xl font-medium lg:text-8xl">{risk.h2}</h2>
            <p className="text-white/80 md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="flex w-[45vw] flex-col justify-center gap-4 bg-fuse-paper px-10">
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
