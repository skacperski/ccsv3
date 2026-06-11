"use client";

import clsx from "clsx";
import React from "react";
import { track } from "../tracking/tracking";

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

export const SURVEY_SECTION_ID = "ankieta";

export function scrollToSurvey() {
  document.getElementById(SURVEY_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
}

const CALENDLY_URL = "https://calendly.com/cycommsec/30min?hide_gdpr_banner=1";

/** Calendly popup (script + CSS loaded in index.html). */
export function openCalendly(url = CALENDLY_URL) {
  const w = window;
  if (w.Calendly && typeof w.Calendly.initPopupWidget === "function") {
    w.Calendly.initPopupWidget({ url });
  } else {
    w.open(url, "_blank", "noopener");
  }
}

/* ------------------------------------------------------------------ */
/* Buttons — steep.app pill system                                     */
/* ------------------------------------------------------------------ */

const BTN_BASE =
  "inline-flex h-10 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-[15px] font-medium leading-none transition-all duration-200 md:h-11 md:px-5 md:text-[17px]";

const BTN_VARIANTS = {
  primary: "bg-steep-text text-white hover:opacity-90 active:opacity-80",
  ghost: "bg-trans-5 text-steep-text hover:bg-trans-10 active:bg-trans-15",
  paper: "bg-white text-steep-text hover:bg-white/90",
  link: "h-auto px-0 text-steep-text underline-offset-4 hover:underline md:h-auto md:px-0",
};

export function Pill({ variant = "primary", className, ...props }) {
  return (
    <button
      type="button"
      className={clsx(BTN_BASE, BTN_VARIANTS[variant], className)}
      {...props}
    />
  );
}

export function SurveyCta({ location = "nieznane", onClick, ...props }) {
  return (
    <Pill
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

export function CalendarCta({ location = "nieznane", trackId = "calendar_open", onClick, ...props }) {
  return (
    <Pill
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

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

/** steep.app breadcrumb-style section label: `Zakres ›` */
export function Kicker({ children, className }) {
  return (
    <p className={clsx("inline-flex items-center gap-1.5 text-sm text-steep-gray", className)}>
      {children}
      <span aria-hidden className="text-steep-muted">
        ›
      </span>
    </p>
  );
}

/**
 * Steep display heading: Newsreader serif with the trailing words in
 * italic — mirrors "AI analytics for faster insights and *zero chaos*".
 * `italicWords` controls how many words from the end get the accent.
 */
export function Serif({ as: Tag = "h2", text, italicWords = 2, className }) {
  const words = String(text).trim().split(" ");
  const n = Math.min(italicWords, Math.max(words.length - 1, 0));
  const head = words.slice(0, words.length - n).join(" ");
  const tail = words.slice(words.length - n).join(" ");
  return (
    <Tag className={clsx("font-serif font-normal tracking-[-0.015em]", className)}>
      {head}
      {tail && (
        <>
          {" "}
          <em className="italic">{tail}</em>
        </>
      )}
    </Tag>
  );
}
