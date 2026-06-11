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

export function openCalendly(url = CALENDLY_URL) {
  const w = window;
  if (w.Calendly && typeof w.Calendly.initPopupWidget === "function") {
    w.Calendly.initPopupWidget({ url });
  } else {
    w.open(url, "_blank", "noopener");
  }
}

/* ------------------------------------------------------------------ */
/* Buttons — awesomic.com: 14px radius, near-black fill, hairline ring */
/* ------------------------------------------------------------------ */

const BTN_BASE =
  "inline-flex h-11 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-[14px] px-5 text-[15px] font-semibold leading-none transition-all duration-200 md:h-12 md:px-6 md:text-base";

const BTN_VARIANTS = {
  dark: "border border-white/20 bg-awe-950 text-white hover:bg-awe-800",
  ghost: "border border-awe-200 bg-white text-awe-950 hover:border-awe-400",
  paper: "bg-white text-awe-950 hover:bg-awe-100",
  link: "h-auto px-0 font-medium text-awe-600 underline-offset-4 hover:text-awe-950 hover:underline md:h-auto md:px-0",
};

export function Btn({ variant = "dark", className, ...props }) {
  return (
    <button type="button" className={clsx(BTN_BASE, BTN_VARIANTS[variant], className)} {...props} />
  );
}

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

/* ------------------------------------------------------------------ */
/* Typography helpers                                                  */
/* ------------------------------------------------------------------ */

/** Centered section header: tiny orange-dot eyebrow + fat heading. */
export function SectionHead({ kicker, h2, sub, className, align = "center", ...rest }) {
  const alignCls = align === "left" ? "text-left" : "mx-auto text-center";
  return (
    <div className={clsx("max-w-2xl", alignCls, className)} {...rest}>
      {kicker && (
        <p
          className={clsx(
            "mb-4 inline-flex items-center gap-2 rounded-full border border-awe-200 px-3.5 py-1.5 text-[13px] font-semibold text-awe-600",
          )}
        >
          <span className="size-1.5 rounded-full bg-awe-orange" aria-hidden />
          {kicker}
        </p>
      )}
      <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.02em] text-awe-950 md:text-[48px] md:leading-[1.18]">
        {h2}
      </h2>
      {sub && <p className="mt-4 text-[16px] leading-relaxed text-awe-600 md:text-lg">{sub}</p>}
    </div>
  );
}
