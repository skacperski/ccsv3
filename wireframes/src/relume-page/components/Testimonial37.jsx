"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { LOGO_PLACEHOLDER_ICON } from "../icons/sectionIcons";

function ClientLogoPlaceholder() {
  const Icon = LOGO_PLACEHOLDER_ICON;
  return (
    <div
      className="flex items-center justify-center bg-black p-6 md:p-8 lg:p-6"
      aria-hidden
    >
      <Icon className="size-10 text-white" strokeWidth={1.25} />
    </div>
  );
}

export function Testimonial37({ proof }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {proof.h2}
            </h1>
            <p className="md:text-md">{proof.sub}</p>
          </div>
        </div>
        <div className="gid-cols-1 grid gap-6 sm:grid-rows-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:grid-rows-2">
          <ClientLogoPlaceholder />
          <ClientLogoPlaceholder />
          <div className="flex flex-col items-start justify-between border border-border-primary p-6 sm:col-span-2 md:p-8 order-last lg:order-none">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <p className="md:text-md">{proof.quote}</p>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold">{proof.attribution}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between border border-border-primary p-6 sm:col-span-2 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <p className="md:text-md">{proof.quote}</p>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold">{proof.attribution}</p>
              </div>
            </div>
          </div>
          <ClientLogoPlaceholder />
          <ClientLogoPlaceholder />
        </div>
      </div>
    </section>
  );
}
