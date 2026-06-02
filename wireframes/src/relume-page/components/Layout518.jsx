"use client";

import React from "react";

function NumberedCard({ index, text }) {
  return (
    <div className="flex w-full items-start gap-3 border border-border-primary bg-white p-5">
      <span className="text-3xl font-bold leading-none text-black/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-base font-bold leading-snug xl:text-lg">{text}</h3>
    </div>
  );
}

export function Layout518({ risk }) {
  const cards = risk.cards ?? [];

  return (
    <section id="risk" className="relative bg-white px-[5%] py-16 md:px-0 md:py-24 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="relative mb-6 flex items-center justify-center overflow-hidden bg-black px-6 py-16 md:mb-8 md:px-8 md:py-24 lg:mb-0 lg:w-[55vw] lg:shrink-0 lg:px-12 lg:py-28">
          <div className="max-w-md text-center text-white">
            <p className="mb-3 font-semibold md:mb-4">{risk.kicker}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {risk.h2}
            </h2>
            <p className="text-white/80 md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:w-[45vw] lg:flex-1 lg:content-center lg:gap-4 lg:px-10 lg:py-16">
          {cards.map((card, i) => (
            <NumberedCard key={i} index={i} text={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
