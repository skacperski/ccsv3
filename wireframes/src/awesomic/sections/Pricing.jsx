"use client";

import clsx from "clsx";
import React from "react";
import { LuCheck } from "react-icons/lu";
import { SectionHead, SurveyCta, CalendarCta } from "../lib";

const FEATURED_CTA = "Oceń swoją gotowość";
const CALENDAR_CTA = "Umów rozmowę";

export function Pricing({ pricing }) {
  return (
    <section id="cennik" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          data-reveal
          kicker={pricing.kicker}
          h2={pricing.h2}
          sub={pricing.lead}
          className="mb-4"
        />
        {pricing.processNote && (
          <p data-reveal className="mx-auto mb-12 max-w-2xl text-center text-[13px] text-awe-500 md:mb-16">
            {pricing.processNote}
          </p>
        )}

        <div data-reveal-group className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.cards.map((card) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div
                key={card.id}
                className={clsx(
                  "relative flex h-full flex-col rounded-[24px] p-7 md:p-8",
                  featured
                    ? "bg-awe-950 text-white"
                    : "border border-awe-150 bg-awe-50 text-awe-950",
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 whitespace-nowrap rounded-full bg-awe-orange px-3.5 py-1 text-[12px] font-bold text-white">
                    {pricing.featuredBadge}
                  </span>
                )}
                <p className={clsx("mb-1 text-[13px] font-semibold", featured ? "text-white/50" : "text-awe-400")}>
                  Krok {card.step}
                </p>
                <h3 className="text-[20px] font-bold tracking-tight">{card.name}</h3>
                <p
                  className={clsx(
                    "mt-1 min-h-[2.6rem] text-[14px] leading-snug",
                    featured ? "text-white/70" : "text-awe-600",
                  )}
                >
                  {card.desc}
                </p>
                <p className="mt-6 text-[40px] font-extrabold leading-none tracking-[-0.02em] md:text-[46px]">
                  {card.price}
                </p>
                <p className={clsx("mb-6 mt-1.5 text-[14px]", featured ? "text-white/55" : "text-awe-500")}>
                  {card.period}
                </p>
                {featured ? (
                  <SurveyCta location={`cennik_${card.id}`} variant="paper" className="w-full">
                    {FEATURED_CTA}
                  </SurveyCta>
                ) : (
                  <CalendarCta location={`cennik_${card.id}`} variant="ghost" className="w-full">
                    {CALENDAR_CTA}
                  </CalendarCta>
                )}
                <ul
                  className={clsx(
                    "mt-7 flex flex-1 flex-col gap-3 border-t pt-6",
                    featured ? "border-white/15" : "border-awe-150",
                  )}
                >
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px]">
                      <LuCheck className="mt-0.5 size-4 flex-none text-awe-orange" strokeWidth={3} />
                      <span className={featured ? "text-white/85" : "text-awe-800"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
