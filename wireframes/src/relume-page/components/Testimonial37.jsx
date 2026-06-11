"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FuseKicker } from "./FuseKicker";

function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col items-start justify-between rounded-lg bg-vent-paper p-6 md:p-8">
      <div className="mb-5 flex text-vent-orange md:mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <BiSolidStar key={i} className="size-5" />
        ))}
      </div>
      <p className="text-vent-carbon md:text-md">{item.quote}</p>
      <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
        <div>
          <p className="font-medium text-vent-carbon">{item.name}</p>
          <p className="text-sm text-vent-slate">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonial37({ proof }) {
  const items = proof.items ?? [];
  const featuredA = items[0];
  const featuredB = items[3] ?? items[2];

  return (
    <section id="opinie" className="bg-vent-mist px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <FuseKicker className="mb-3 justify-center md:mb-4">Opinie</FuseKicker>
            <p className="text-vent-graphite md:text-md">{proof.sub}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {featuredA && <TestimonialCard item={featuredA} />}
          {featuredB && <TestimonialCard item={featuredB} />}
        </div>
      </div>
    </section>
  );
}
