"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { openCalendly } from "../utils/calendly";
import { scrollToSurvey } from "../utils/cta";
import { pillPrimaryButtonClassName } from "../utils/vent";
import { track } from "../../tracking/tracking";
import { Timeline17 } from "./Timeline17";

function milestoneDescription({ title, body, note }) {
  const parts = [title, body, note].filter(Boolean);
  return parts.join(" ");
}

export function TimelineSection({ timeline, ctaPrimary, ctaSecondary }) {
  const description = timeline.footnote
    ? `${timeline.lead} ${timeline.footnote}`
    : timeline.lead;

  const buttons = [
    {
      title: ctaPrimary,
      variant: "primary",
      className: pillPrimaryButtonClassName,
      onClick: () => {
        track("cta_survey", { location: "harmonogram" });
        scrollToSurvey();
      },
    },
  ];

  if (ctaSecondary) {
    buttons.push({
      title: ctaSecondary,
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
      onClick: () => {
        track("calendar_open", { location: "harmonogram" });
        openCalendly();
      },
    });
  }

  return (
    <Timeline17
      id="harmonogram"
      tagline={timeline.kicker}
      heading={timeline.h2}
      description={description}
      buttons={buttons}
      timelineItems={timeline.milestones.map((item) => ({
        date: item.date,
        description: milestoneDescription(item),
      }))}
    />
  );
}
