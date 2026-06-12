import React from "react";
import { Kicker, SurveyCta, CalendarCta, Check } from "./ui";
import { useReveal } from "../hooks/useReveal";

function Card({ card, featured, badge }) {
  const Cta = card.action === "calendly" ? CalendarCta : SurveyCta;
  return (
    <div
      className={`relative flex flex-col rounded-ui p-8 ${
        featured
          ? "bg-[#9a49fd] text-white shadow-xl md:z-10 md:scale-[1.04]"
          : "bg-light"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-8 rounded-[2px] bg-red px-3.5 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <p className={`font-mono text-sm font-medium ${featured ? "text-white" : "text-red"}`}>
        {card.step}
      </p>
      <div className="mt-3 min-h-[6.5rem]">
        <h3 className="text-xl font-medium tracking-tight">{card.name}</h3>
        <p className={`mt-1 text-[15px] ${featured ? "text-white" : "text-gray"}`}>{card.desc}</p>
      </div>
      <p className="tech-display mt-7 text-4xl md:text-[38px]">{card.price}</p>
      <p className={`mt-1 text-[15px] ${featured ? "text-white/60" : "text-gray"}`}>
        {card.period}
      </p>
      <div className={`mt-7 h-px w-full ${featured ? "bg-white" : "bg-trans-10"}`} />
      <ul className="mt-7 flex flex-col gap-2.5">
        {card.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[15px] leading-snug">
            <Check className={featured ? "text-white" : "text-red"} />
            <span className={featured ? "text-white" : "text-gray"}>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex grow items-end">
        <Cta variant="red" className="w-full">
          {card.cta}
        </Cta>
      </div>
    </div>
  );
}

export function Pricing({ pricing }) {
  const ref = useReveal();
  return (
    <section id="cennik" ref={ref} className="scroll-mt-20 bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{pricing.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{pricing.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">{pricing.lead}</p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-soft">{pricing.processNote}</p>
        </div>
        <div className="mt-16 grid items-stretch gap-4 md:grid-cols-3" data-reveal-group>
          {pricing.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              featured={card.id === pricing.featuredCard}
              badge={pricing.featuredBadge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
