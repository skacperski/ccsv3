"use client";

import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

/**
 * Relume Timeline17 — reusable horizontal timeline.
 * Use via TimelineSection for variant-driven content, or pass props directly.
 */
export const Timeline17Defaults = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
};

export function Timeline17(props) {
  const { tagline, heading, description, buttons, timelineItems, className, ...rest } = {
    ...Timeline17Defaults,
    ...props,
  };

  return (
    <section
      className={clsx("overflow-hidden px-[5%] py-16 md:py-24 lg:py-28", className)}
      {...rest}
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-fuse-blue md:mb-4">
              {"//"} 04 — {tagline}
            </p>
            <h2 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
            {buttons?.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row">
          <div className="absolute left-0 top-1.5 z-10 hidden h-1 w-16 bg-gradient-to-r from-background-primary to-transparent md:block" />
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              isLastItem={index === timelineItems.length - 1}
              {...item}
            />
          ))}
          <div className="absolute right-0 top-1.5 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ date, description, isLastItem }) {
  return (
    <div className="relative flex gap-4 md:flex-col md:gap-0 md:flex-1">
      <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
        <div className="h-2 w-[3px] bg-fuse-blue md:h-[3px] md:w-full" />
        <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-fuse-blue shadow-[0_0_0_8px_white]" />
        <div
          className={clsx("h-full w-[3px] bg-fuse-blue md:h-[3px] md:w-full", {
            "hidden md:block": isLastItem,
          })}
        />
      </div>
      <div className="mb-6 px-3 md:mb-0 md:text-center">
        <h3 className="mb-2 font-mono text-lg font-medium text-fuse-blue md:text-xl">{date}</h3>
        <p className="text-sm leading-relaxed md:text-base">{description}</p>
      </div>
    </div>
  );
}
