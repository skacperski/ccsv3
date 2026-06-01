"use client";

import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { scrollToSurvey } from "../utils/cta";
import { darkSurfaceButtonClassName } from "../utils/darkSurfaceButton";

export function SurveyCtaButton({ className, variant, onClick, ...props }) {
  return (
    <Button
      variant={variant}
      className={clsx(
        variant === "secondary-alt" && darkSurfaceButtonClassName,
        className,
      )}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        scrollToSurvey();
      }}
    />
  );
}
