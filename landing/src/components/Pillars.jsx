import React from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { Kicker } from "./ui";
import { Icon } from "./Icons";
import { DotGrid } from "./DotGrid";
import { useReveal } from "../hooks/useReveal";

export function Pillars({ service }) {
  const ref = useReveal();

  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const TINT = "#f3f3f4";
      const WHITE = "#ffffff";

      const grid = section.querySelector("[data-pillar-cards]");
      const cards = grid ? Array.from(grid.children) : [];

      const fade = (target, color, duration) =>
        gsap.to(target, { backgroundColor: color, duration, ease: "power2.out", overwrite: "auto" });

      // Trigger 1: section enters the viewport (delayed by 200px) → background fades
      // from white to gray.
      ScrollTrigger.create({
        trigger: section,
        start: "top+=200 85%",
        onEnter:     () => fade(section, TINT, 0.6),
        onLeaveBack: () => fade(section, WHITE, 0.4),
      });

      // Trigger 2: section bottom becomes visible (reaches the bottom of the viewport)
      // → section fades back to white, while the cards take on the section's gray.
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        onEnter: () => {
          fade(section, WHITE, 0.5);
          if (cards.length) fade(cards, TINT, 0.5);
        },
        onLeaveBack: () => {
          fade(section, TINT, 0.5);
          if (cards.length) fade(cards, WHITE, 0.5);
        },
      });

      if (!grid) return;

      gsap.from(grid.children, {
        y: 20,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: grid, start: "top 86%", toggleActions: "play none none reverse" },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-5 py-24 md:py-32">
      <DotGrid />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{service.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{service.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">{service.sub}</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2" data-pillar-cards>
          {service.pillars.map((pillar) => (
            <div key={pillar.num} className="group rounded-ui bg-white p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                {/* Icon pill — expands to show label on hover */}
                <span className="flex h-12 max-w-[48px] items-center gap-2 overflow-hidden rounded-[5px] bg-ink text-white transition-all duration-300 ease-out group-hover:max-w-[200px] group-hover:pr-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <Icon name={pillar.icon} className="size-6" />
                  </span>
                  <span className="whitespace-nowrap font-mono text-[12px] font-medium uppercase tracking-wide text-white opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:delay-150">
                    {pillar.num} · {pillar.label}
                  </span>
                </span>
                {/* External label — fades out and slides right on hover */}
                <span className="font-mono text-[12px] font-medium uppercase tracking-wide text-soft transition-all duration-200 ease-out group-hover:translate-x-4 group-hover:opacity-0">
                  {pillar.num} · {pillar.label}
                </span>
              </div>
              <h3 className="tech-display text-2xl leading-snug md:text-[26px]">{pillar.h2}</h3>
              <p className="mt-3 leading-relaxed text-gray">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
