"use client";

import clsx from "clsx";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";

const MAX_FEATURES = 5;
const FEATURED_PRICING_CTA = "Oceń swoją gotowość";
const PRICING_CALENDAR_CTA = "Umów rozmowę";

export function Pricing20({ pricing }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{pricing.kicker}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {pricing.h2}
          </h1>
          <p className="md:text-md">{pricing.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.cards.map((card) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div
                key={card.id}
                className={clsx(
                  "relative flex h-full flex-col",
                  featured
                    ? "border-2 border-black bg-black text-white"
                    : "border border-border-primary bg-white text-black",
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-black bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                    Polecane
                  </span>
                )}
                <div className="flex flex-1 flex-col px-6 py-8 md:p-8">
                  <div className="min-h-[5.5rem]">
                    <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                      {card.name}
                    </h2>
                    <p
                      className={clsx(
                        "min-h-[2.75rem] text-sm leading-snug",
                        featured ? "text-white/80" : "text-neutral-600",
                      )}
                    >
                      {card.desc}
                    </p>
                  </div>
                  <div
                    className={clsx(
                      "my-8 h-px w-full",
                      featured ? "bg-white/20" : "bg-border-primary",
                    )}
                  />
                  <div className="min-h-[7.5rem]">
                    <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                      {card.price}
                    </h3>
                    <p className={featured ? "text-white/70" : undefined}>
                      {card.period}
                    </p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    {featured ? (
                      <SurveyCtaButton
                        title={FEATURED_PRICING_CTA}
                        location={`cennik_${card.id}`}
                        className="w-full"
                        variant="secondary-alt"
                      >
                        {FEATURED_PRICING_CTA}
                      </SurveyCtaButton>
                    ) : (
                      <CalendarCtaButton
                        title={PRICING_CALENDAR_CTA}
                        location={`cennik_${card.id}`}
                        className="w-full"
                        variant="primary"
                      >
                        {PRICING_CALENDAR_CTA}
                      </CalendarCtaButton>
                    )}
                  </div>
                  <div
                    className={clsx(
                      "my-8 h-px w-full",
                      featured ? "bg-white/20" : "bg-border-primary",
                    )}
                  />
                  <div className="grid flex-1 grid-cols-1 gap-y-4 py-2">
                    {Array.from({ length: MAX_FEATURES }).map((_, i) => {
                      const feature = card.features[i];
                      return (
                        <div
                          key={i}
                          className={clsx(
                            "flex min-h-[2.75rem] self-start",
                            !feature && "invisible",
                          )}
                          aria-hidden={!feature}
                        >
                          {feature && (
                            <>
                              <div className="mr-4 flex-none self-start">
                                <BiCheck
                                  className={clsx(
                                    "size-6",
                                    featured ? "text-white" : "text-black",
                                  )}
                                />
                              </div>
                              <p>{feature}</p>
                            </>
                          )}
                        </div>
                      );
                    })}
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
