"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Faq1({ faq }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {faq.h2}
          </h2>
          <p className="md:text-md">{faq.sub}</p>
        </div>
        <Accordion type="multiple">
          {faq.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
