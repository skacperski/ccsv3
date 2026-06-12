import React, { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { Kicker } from "./ui";
import { useReveal } from "../hooks/useReveal";

export function Timeline({ timeline }) {
  const ref = useReveal();
  const lineRef = useRef(null);
  const bgLineRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);

  useGSAP(
    () => {
      const track = lineRef.current?.parentElement;
      if (!track || !lineRef.current) return;

      // Trim lines so they end at the bottom of the last dot, not the container bottom.
      // Each dot span is top-0.5 (2px) from its li, size-8 (32px tall).
      const lastItem = itemsRef.current.filter(Boolean).at(-1);
      if (lastItem) {
        const dotBottom = lastItem.offsetTop + 2 + 32;
        const bottomPx = `${Math.max(0, track.offsetHeight - dotBottom)}px`;
        lineRef.current.style.bottom = bottomPx;
        if (bgLineRef.current) bgLineRef.current.style.bottom = bottomPx;
      }

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        },
      );

      dotsRef.current.forEach((dot, i) => {
        const item = itemsRef.current[i];
        if (!dot || !item) return;

        gsap.fromTo(
          dot,
          { scale: 1 },
          {
            scale: 4,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 72%",
              end: "top 58%",
              scrub: 0.6,
            },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section id="harmonogram" ref={ref} className="scroll-mt-20 bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{timeline.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{timeline.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">
            {timeline.lead}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div ref={bgLineRef} className="absolute bottom-3 left-[15px] top-3 w-px bg-trans-15" aria-hidden />
          <div
            ref={lineRef}
            className="absolute bottom-3 left-[15px] top-3 w-px bg-red"
            aria-hidden
          />
          <ol className="flex flex-col gap-12">
            {timeline.milestones.map((m, i) => (
              <li
                key={m.date}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="relative pl-14"
                data-reveal
              >
                <span
                  className="absolute left-0 top-0.5 flex size-8 items-center justify-center overflow-hidden rounded-[2px] bg-light"
                  aria-hidden
                >
                  <span
                    ref={(el) => {
                      dotsRef.current[i] = el;
                    }}
                    className="size-2 shrink-0 rounded-[2px] bg-red"
                  />
                </span>
                <p className="text-[15px] font-medium text-red">{m.date}</p>
                <h3 className="mt-1.5 text-xl font-medium tracking-tight md:text-2xl">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-gray">{m.body}</p>
                {m.note && (
                  <p className="mt-4 rounded-[2px] bg-light p-4 text-[15px] leading-relaxed text-gray">
                    {m.note}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
