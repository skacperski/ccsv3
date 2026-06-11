"use client";

import clsx from "clsx";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { FuseKicker } from "./FuseKicker";
import { pillOutlineButtonClassName, pillPaperButtonClassName } from "../utils/vent";

const FEATURED_PRICING_CTA = "Oceń swoją gotowość";
const PRICING_CALENDAR_CTA = "Umów rozmowę";

export function Pricing20({ pricing }) {
  return (
    <section id="cennik" className="bg-vent-mist px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
          <FuseKicker className="mb-3 justify-center md:mb-4">{pricing.kicker}</FuseKicker>
          <h1 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl lg:text-8xl">
            {pricing.h2}
          </h1>
          <p className="text-vent-graphite md:text-md">{pricing.lead}</p>
          {pricing.processNote && (
            <p className="mt-4 text-sm text-vent-slate">{pricing.processNote}</p>
          )}
        </div>

        <div className="relative grid grid-cols-1 gap-8 pt-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.cards.map((card, index) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div key={card.id} className="relative flex h-full flex-col">
                {index < pricing.cards.length - 1 && (
                  <span
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-vent-slate lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
                <div
                  className={clsx(
                    "relative flex h-full flex-col rounded-lg",
                    featured
                      ? "bg-vent-carbon text-white"
                      : "bg-vent-paper text-vent-carbon",
                  )}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-[20px] bg-vent-orange px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {pricing.featuredBadge}
                    </span>
                  )}
                  <div className="flex flex-1 flex-col px-6 py-8 md:p-8">
                    <p
                      className={clsx(
                        "mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide",
                        featured ? "text-white/60" : "text-vent-graphite",
                      )}
                    >
                      <span
                        className={clsx(
                          "size-1.5 rounded-full",
                          featured ? "bg-vent-orange" : "bg-vent-orange",
                        )}
                        aria-hidden
                      />
                      Krok {card.step}
                    </p>
                    <div className="min-h-[5.5rem]">
                      <h2 className="mb-1 text-md font-medium leading-[1.4] md:text-xl">
                        {card.name}
                      </h2>
                      <p
                        className={clsx(
                          "min-h-[2.75rem] text-sm leading-snug",
                          featured ? "text-white/75" : "text-vent-graphite",
                        )}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <div
                      className={clsx(
                        "my-8 h-px w-full",
                        featured ? "bg-white/15" : "bg-vent-chalk",
                      )}
                    />
                    <div className="min-h-[7.5rem]">
                      <h3 className="my-2 font-display text-6xl tracking-[-0.02em] md:text-9xl lg:text-10xl">
                        {card.price}
                      </h3>
                      <p
                        className={clsx(
                          "text-sm",
                          featured ? "text-white/65" : "text-vent-slate",
                        )}
                      >
                        {card.period}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-8">
                      {featured ? (
                        <SurveyCtaButton
                          title={FEATURED_PRICING_CTA}
                          location={`cennik_${card.id}`}
                          className={`${pillPaperButtonClassName} w-full`}
                          variant="secondary-alt"
                        >
                          {FEATURED_PRICING_CTA}
                        </SurveyCtaButton>
                      ) : (
                        <CalendarCtaButton
                          title={PRICING_CALENDAR_CTA}
                          location={`cennik_${card.id}`}
                          className={`${pillOutlineButtonClassName} w-full`}
                          variant="primary"
                        >
                          {PRICING_CALENDAR_CTA}
                        </CalendarCtaButton>
                      )}
                    </div>
                    <div
                      className={clsx(
                        "my-8 h-px w-full",
                        featured ? "bg-white/15" : "bg-vent-chalk",
                      )}
                    />
                    <ul className="flex flex-1 flex-col gap-y-3 py-2">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex self-start">
                          <div className="mr-4 flex-none self-start">
                            <BiCheck
                              className={clsx(
                                "size-6",
                                featured ? "text-vent-orange" : "text-vent-carbon",
                              )}
                            />
                          </div>
                          <p className={featured ? "text-white/85" : undefined}>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
