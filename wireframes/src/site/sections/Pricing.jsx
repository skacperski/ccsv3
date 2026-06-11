"use client";

import clsx from "clsx";
import React from "react";
import { LuCheck } from "react-icons/lu";
import { Serif, Kicker, SurveyCta, CalendarCta } from "../lib";

const FEATURED_CTA = "Oceń swoją gotowość";
const CALENDAR_CTA = "Umów rozmowę";

export function Pricing({ pricing }) {
  return (
    <section id="cennik" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div data-reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <Kicker className="mb-4">{pricing.kicker}</Kicker>
          <Serif
            text={pricing.h2}
            italicWords={2}
            className="mb-5 text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
          <p className="text-[17px] leading-relaxed text-steep-gray">{pricing.lead}</p>
          {pricing.processNote && (
            <p className="mt-4 text-[14px] text-steep-muted">{pricing.processNote}</p>
          )}
        </div>

        <div data-reveal-group className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch">
          {pricing.cards.map((card) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div
                key={card.id}
                className={clsx(
                  "relative flex h-full flex-col rounded-[20px] p-7 md:p-8",
                  featured ? "bg-steep-text text-white" : "bg-steep-light-gray text-steep-text",
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 whitespace-nowrap rounded-full bg-steep-green px-3.5 py-1 text-xs font-semibold text-white">
                    {pricing.featuredBadge}
                  </span>
                )}
                <p className={clsx("mb-1 text-[13px]", featured ? "text-white/50" : "text-steep-muted")}>
                  Krok {card.step}
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight">{card.name}</h3>
                <p
                  className={clsx(
                    "mt-1 min-h-[2.6rem] text-[14px] leading-snug",
                    featured ? "text-white/70" : "text-steep-gray",
                  )}
                >
                  {card.desc}
                </p>
                <p className="mt-6 font-serif text-[44px] italic leading-none tracking-tight md:text-[52px]">
                  {card.price}
                </p>
                <p className={clsx("mb-6 mt-1 text-[14px]", featured ? "text-white/60" : "text-steep-muted")}>
                  {card.period}
                </p>
                {featured ? (
                  <SurveyCta location={`cennik_${card.id}`} variant="paper" className="w-full">
                    {FEATURED_CTA}
                  </SurveyCta>
                ) : (
                  <CalendarCta location={`cennik_${card.id}`} variant="ghost" className="w-full !bg-white hover:!bg-white/80">
                    {CALENDAR_CTA}
                  </CalendarCta>
                )}
                <ul
                  className={clsx(
                    "mt-7 flex flex-1 flex-col gap-3 border-t pt-6",
                    featured ? "border-white/15" : "border-trans-10",
                  )}
                >
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px]">
                      <LuCheck
                        className={clsx("mt-0.5 size-4 flex-none", featured ? "text-steep-green" : "text-steep-green-deep")}
                        strokeWidth={2.5}
                      />
                      <span className={featured ? "text-white/85" : undefined}>{feature}</span>
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
