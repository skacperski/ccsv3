"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

function ClientLogo({ src, alt }) {
  return (
    <div className="flex min-h-[8rem] items-center justify-center bg-black p-6 md:min-h-[10rem] md:p-8 lg:min-h-0 lg:p-6">
      <img
        src={src}
        alt={alt}
        className="max-h-10 w-auto max-w-[80%] object-contain md:max-h-12"
        loading="lazy"
      />
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col items-start justify-between border border-border-primary p-6 sm:col-span-2 md:p-8">
      <div className="mb-5 flex md:mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <BiSolidStar key={i} className="size-6" />
        ))}
      </div>
      <p className="md:text-md">{item.quote}</p>
      <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-neutral-600">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonial37({ proof }) {
  const items = proof.items ?? [];
  const logoTiles = items.slice(0, 4);
  const featuredA = items[0];
  const featuredB = items[3] ?? items[2];

  return (
    <section id="opinie" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {proof.h2}
            </h2>
            <p className="md:text-md">{proof.sub}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-rows-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:grid-rows-2">
          {logoTiles[0] && <ClientLogo src={logoTiles[0].logoSrc} alt={logoTiles[0].logoAlt} />}
          {logoTiles[1] && <ClientLogo src={logoTiles[1].logoSrc} alt={logoTiles[1].logoAlt} />}
          {featuredA && (
            <div className="order-last lg:order-none">
              <TestimonialCard item={featuredA} />
            </div>
          )}
          {featuredB && <TestimonialCard item={featuredB} />}
          {logoTiles[2] && <ClientLogo src={logoTiles[2].logoSrc} alt={logoTiles[2].logoAlt} />}
          {logoTiles[3] && <ClientLogo src={logoTiles[3].logoSrc} alt={logoTiles[3].logoAlt} />}
        </div>
      </div>
    </section>
  );
}
