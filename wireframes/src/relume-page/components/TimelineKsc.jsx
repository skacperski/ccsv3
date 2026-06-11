"use client";

import React from "react";

export function TimelineKsc({ timeline }) {
  return (
    <section id="harmonogram" className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 font-semibold text-white/60 md:mb-4">{timeline.kicker}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {timeline.h2}
          </h2>
          <p className="text-white/75 md:text-md">{timeline.lead}</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:gap-10">
          {timeline.milestones.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-4 border border-white/15 p-6 md:grid-cols-[10rem_1fr] md:gap-8 md:p-8"
            >
              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-bold leading-snug md:text-xl">{item.date}</p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold leading-snug md:text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">{item.body}</p>
                {item.note && (
                  <p className="mt-4 border-l-2 border-white/30 pl-4 text-sm text-white/55">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-white/50">
          {timeline.footnote}
        </p>
      </div>
    </section>
  );
}
