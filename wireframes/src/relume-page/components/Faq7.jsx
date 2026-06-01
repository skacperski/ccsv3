"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Faq7({ faq }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {faq.h2}
          </h2>
          <p className="md:text-md">{faq.sub}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          {faq.items.map((item, i) => (
            <div key={i}>
              <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
                {item.q}
              </h2>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {faq.tail.h}
          </h4>
          <p className="md:text-md">{faq.tail.sub}</p>
          <div className="mt-6 md:mt-8">
            <SurveyCtaButton title={faq.tail.cta} variant="secondary">
              {faq.tail.cta}
            </SurveyCtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
