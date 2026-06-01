"use client";

import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { darkSurfaceButtonClassName } from "../utils/darkSurfaceButton";
import { openCalendly } from "../utils/calendly";
import { track } from "../../tracking/tracking";

export function CalendarCtaButton({
  className,
  variant,
  trackId = "calendar_open",
  location = "nieznane",
  onClick,
  ...props
}) {
  return (
    <Button
      type="button"
      variant={variant}
      data-track={trackId}
      data-track-location={location}
      className={clsx(
        variant === "secondary-alt" && darkSurfaceButtonClassName,
        className,
      )}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        track(trackId, { location });
        openCalendly();
      }}
    />
  );
}
