"use client";

import React from "react";
import { Serif, Kicker, SurveyCta, CalendarCta } from "../lib";

export function Steps({ how, ctaPrimary, ctaSecondary }) {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div data-reveal className="mx-auto mb-14 max-w-xl text-center md:mb-20">
          <Kicker className="mb-4">{how.kicker}</Kicker>
          <Serif
            text={how.h2}
            italicWords={3}
            className="mb-5 text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
          <p className="text-[17px] leading-relaxed text-steep-gray">{how.sub}</p>
        </div>

        <div data-reveal-group className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {how.steps.map((step, i) => (
            <div key={i} className="rounded-[20px] bg-steep-bg2 p-8">
              <p className="mb-4 font-serif text-[40px] italic leading-none text-steep-text/25">
                {i + 1}
              </p>
              <h3 className="mb-2 text-[18px] font-semibold tracking-tight text-steep-text">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-steep-gray">{step.body}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <SurveyCta location="proces">{ctaPrimary}</SurveyCta>
          {ctaSecondary && (
            <CalendarCta variant="link" location="proces" className="font-normal">
              {ctaSecondary}
            </CalendarCta>
          )}
        </div>
      </div>
    </section>
  );
}
