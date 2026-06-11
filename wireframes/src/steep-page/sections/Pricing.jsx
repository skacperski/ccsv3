"use client";

import clsx from "clsx";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { Eyebrow, SerifHeading, SurveyCta, CalendarCta } from "../ui";

const FEATURED_PRICING_CTA = "Oceń swoją gotowość";
const PRICING_CALENDAR_CTA = "Umów rozmowę";

export function Pricing({ pricing }) {
  return (
    <section id="cennik" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{pricing.kicker}</Eyebrow>
          <SerifHeading
            text={pricing.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{pricing.lead}</p>
          {pricing.processNote && (
            <p className="mt-4 text-sm text-steep-muted">{pricing.processNote}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.cards.map((card) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div
                key={card.id}
                className={clsx(
                  "relative flex h-full flex-col rounded-3xl p-7 md:p-8",
                  featured
                    ? "bg-steep-text text-white"
                    : "border border-trans-10 bg-white text-steep-text",
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-steep-green px-4 py-1 text-xs font-semibold text-white">
                    {pricing.featuredBadge}
                  </span>
                )}
                <p
                  className={clsx(
                    "mb-2 text-sm font-medium",
                    featured ? "text-white/60" : "text-steep-muted",
                  )}
                >
                  Krok {card.step}
                </p>
                <div className="min-h-[5.5rem]">
                  <h3 className="mb-1 text-xl font-semibold tracking-tight">{card.name}</h3>
                  <p
                    className={clsx(
                      "min-h-[2.75rem] text-sm leading-snug",
                      featured ? "text-white/75" : "text-steep-gray",
                    )}
                  >
                    {card.desc}
                  </p>
                </div>
                <div className="min-h-[6.5rem] pt-6">
                  <p className="font-serif text-5xl italic tracking-tight md:text-6xl">
                    {card.price}
                  </p>
                  <p
                    className={clsx(
                      "mt-1 text-sm",
                      featured ? "text-white/65" : "text-steep-muted",
                    )}
                  >
                    {card.period}
                  </p>
                </div>
                <div className="py-6">
                  {featured ? (
                    <SurveyCta location={`cennik_${card.id}`} variant="paper" className="w-full">
                      {FEATURED_PRICING_CTA}
                    </SurveyCta>
                  ) : (
                    <CalendarCta location={`cennik_${card.id}`} variant="ghost" className="w-full">
                      {PRICING_CALENDAR_CTA}
                    </CalendarCta>
                  )}
                </div>
                <ul
                  className={clsx(
                    "flex flex-1 flex-col gap-3 border-t pt-6",
                    featured ? "border-white/15" : "border-trans-10",
                  )}
                >
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px]">
                      <BiCheck
                        className={clsx(
                          "size-5 flex-none",
                          featured ? "text-steep-green" : "text-steep-green-deep",
                        )}
                      />
                      <span className={featured ? "text-white/85" : "text-steep-text"}>
                        {feature}
                      </span>
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
