"use client";

import clsx from "clsx";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { FuseKicker } from "./FuseKicker";
import { limeButtonClassName, ghostLightButtonClassName } from "../utils/fuse";

const FEATURED_PRICING_CTA = "Oceń swoją gotowość";
const PRICING_CALENDAR_CTA = "Umów rozmowę";

export function Pricing20({ pricing }) {
  return (
    <section id="cennik" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
          <FuseKicker num="08" className="mb-3 text-fuse-blue md:mb-4">
            {pricing.kicker}
          </FuseKicker>
          <h1 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
            {pricing.h2}
          </h1>
          <p className="md:text-md">{pricing.lead}</p>
          {pricing.processNote && (
            <p className="mt-4 text-sm text-fuse-muted">{pricing.processNote}</p>
          )}
        </div>

        <div className="relative grid grid-cols-1 gap-8 pt-4 lg:grid-cols-3 lg:items-stretch">
          <div
            className="pointer-events-none absolute top-[4.5rem] hidden h-px bg-fuse-line lg:block"
            style={{ left: "16.67%", right: "16.67%" }}
            aria-hidden
          />
          {pricing.cards.map((card, index) => {
            const featured = card.id === pricing.featuredCard;
            return (
              <div key={card.id} className="relative flex h-full flex-col">
                {index < pricing.cards.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-2xl text-fuse-muted/50 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
                <div
                  className={clsx(
                    "relative flex h-full flex-col",
                    featured
                      ? "border border-fuse-ink bg-fuse-ink text-white"
                      : "border border-fuse-line bg-white text-fuse-text",
                  )}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-fuse-lime px-4 py-1 font-mono text-xs font-medium uppercase tracking-[0.04em] text-fuse-ink">
                      {pricing.featuredBadge}
                    </span>
                  )}
                  <div className="flex flex-1 flex-col px-6 py-8 md:p-8">
                    <p
                      className={clsx(
                        "mb-2 font-mono text-xs font-medium uppercase tracking-[0.08em]",
                        featured ? "text-fuse-lime" : "text-fuse-blue",
                      )}
                    >
                      {"//"} Krok {card.step}
                    </p>
                    <div className="min-h-[5.5rem]">
                      <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                        {card.name}
                      </h2>
                      <p
                        className={clsx(
                          "min-h-[2.75rem] text-sm leading-snug",
                          featured ? "text-white/80" : "text-fuse-muted",
                        )}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <div
                      className={clsx(
                        "my-8 h-px w-full",
                        featured ? "bg-white/20" : "bg-fuse-line",
                      )}
                    />
                    <div className="min-h-[7.5rem]">
                      <h3 className="my-2 text-6xl font-medium md:text-9xl lg:text-10xl">
                        {card.price}
                      </h3>
                      <p
                        className={clsx(
                          "font-mono text-sm",
                          featured ? "text-white/70" : "text-fuse-muted",
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
                          className={`${limeButtonClassName} w-full`}
                          variant="secondary-alt"
                        >
                          {FEATURED_PRICING_CTA}
                        </SurveyCtaButton>
                      ) : (
                        <CalendarCtaButton
                          title={PRICING_CALENDAR_CTA}
                          location={`cennik_${card.id}`}
                          className={`${ghostLightButtonClassName} w-full`}
                          variant="primary"
                        >
                          {PRICING_CALENDAR_CTA}
                        </CalendarCtaButton>
                      )}
                    </div>
                    <div
                      className={clsx(
                        "my-8 h-px w-full",
                        featured ? "bg-white/20" : "bg-fuse-line",
                      )}
                    />
                    <ul className="flex flex-1 flex-col gap-y-3 py-2">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex self-start">
                          <div className="mr-4 flex-none self-start">
                            <BiCheck
                              className={clsx(
                                "size-6",
                                featured ? "text-fuse-lime" : "text-fuse-blue",
                              )}
                            />
                          </div>
                          <p>{feature}</p>
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
