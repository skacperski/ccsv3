"use client";

import React from "react";

export function Layout312({ risk }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{risk.kicker}</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {risk.h2}
            </h2>
          </div>
          <div>
            <p className="md:text-md">{risk.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {risk.cards.map((card, i) => (
            <div key={i}>
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt=""
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {card}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
