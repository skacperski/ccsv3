"use client";

import React from "react";

const ICON = "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg";

function splitRiskCards(cards, lead) {
  if (cards.length >= 4) {
    return {
      featuredTitle: cards[0],
      featuredBody: cards[1],
      side: [cards[2], cards[3]],
    };
  }
  return {
    featuredTitle: cards[0] ?? "",
    featuredBody: lead,
    side: [cards[1], cards[2]].filter(Boolean),
  };
}

export function Layout312({ risk }) {
  const { featuredTitle, featuredBody, side } = splitRiskCards(risk.cards, risk.lead);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{risk.kicker}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {risk.h2}
            </h2>
            <p className="md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img src={ICON} className="size-12" alt="" />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {featuredTitle}
                  </h3>
                  {featuredBody && (
                    <p className="text-neutral-600 md:text-md">{featuredBody}</p>
                  )}
                </div>
              </div>
            </div>
            {side.map((title, i) => (
              <div
                key={i}
                className="flex h-full flex-col border border-border-primary"
              >
                <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-6">
                  <div className="mb-3 md:mb-4">
                    <img src={ICON} className="size-12" alt="" />
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
