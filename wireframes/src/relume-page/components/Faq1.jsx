"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { FuseKicker } from "./FuseKicker";

export function Faq1({ faq, num = "10" }) {
  return (
    <section id="relume" className="bg-vent-mist px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <FuseKicker num={num} className="mb-3 justify-center md:mb-4">
            {faq.kicker}
          </FuseKicker>
          <h2 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl lg:text-8xl">
            {faq.h2}
          </h2>
          <p className="text-vent-graphite md:text-md">{faq.sub}</p>
        </div>
        <Accordion type="multiple" className="rounded-lg bg-vent-paper px-6 md:px-8">
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
      </div>
    </section>
  );
}
