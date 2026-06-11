"use client";

import clsx from "clsx";
import React from "react";
import { openCalendly } from "../relume-page/utils/calendly";
import { scrollToSurvey } from "../relume-page/utils/cta";
import { track } from "../tracking/tracking";

/* Steep button system: pill silhouette, h-10/11, Inter medium.
   Primary = solid #17191C; ghost = trans-5 wash; plain = text only. */
const BTN_BASE =
  "inline-flex h-10 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-[15px] font-medium leading-none transition-all duration-200 md:h-11 md:px-5 md:text-[17px]";

const BTN_VARIANTS = {
  primary: "bg-steep-text text-white hover:opacity-90 active:opacity-80",
  ghost: "bg-trans-5 text-steep-text hover:bg-trans-10 active:bg-trans-15",
  paper: "bg-white text-steep-text hover:bg-white/90",
  link: "h-auto px-0 text-steep-gray underline-offset-4 hover:text-steep-text hover:underline md:h-auto md:px-0",
};

export function Btn({ variant = "primary", className, ...props }) {
  return (
    <button
      type="button"
      className={clsx(BTN_BASE, BTN_VARIANTS[variant], className)}
      {...props}
    />
  );
}

/** CTA scrolling to the survey section. */
export function SurveyCta({ location = "nieznane", onClick, ...props }) {
  return (
    <Btn
      data-track="cta_survey"
      data-track-location={location}
      onClick={(e) => {
        onClick?.(e);
        track("cta_survey", { location });
        scrollToSurvey();
      }}
      {...props}
    />
  );
}

/** CTA opening the Calendly popup. */
export function CalendarCta({ location = "nieznane", trackId = "calendar_open", onClick, ...props }) {
  return (
    <Btn
      data-track={trackId}
      data-track-location={location}
      onClick={(e) => {
        onClick?.(e);
        track(trackId, { location });
        openCalendly();
      }}
      {...props}
    />
  );
}

/** Small gray section eyebrow. */
export function Eyebrow({ children, className }) {
  return (
    <p className={clsx("text-sm font-medium text-steep-gray", className)}>{children}</p>
  );
}

/**
 * Steep display heading: Newsreader serif, tight leading, with the last
 * word set in italic — the editorial accent steep.app uses on headlines.
 */
export function SerifHeading({ as: Tag = "h2", text, className }) {
  const words = String(text).trim().split(" ");
  const last = words.pop();
  return (
    <Tag className={clsx("font-serif font-normal tracking-[-0.01em]", className)}>
      {words.join(" ")} <em className="italic">{last}</em>
    </Tag>
  );
}
