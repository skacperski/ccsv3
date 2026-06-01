"use client";

import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { scrollToSurvey } from "../utils/cta";
import { darkSurfaceButtonClassName } from "../utils/darkSurfaceButton";
import { track } from "../../tracking/tracking";

export function SurveyCtaButton({ className, variant, onClick, location = "nieznane", ...props }) {
  return (
    <Button
      variant={variant}
      data-track="cta_survey"
      data-track-location={location}
      className={clsx(
        variant === "secondary-alt" && darkSurfaceButtonClassName,
        className,
      )}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        track("cta_survey", { location });
        scrollToSurvey();
      }}
    />
  );
}
