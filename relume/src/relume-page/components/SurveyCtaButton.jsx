"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { scrollToSurvey } from "../utils/cta";

export function SurveyCtaButton({ onClick, ...props }) {
  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        scrollToSurvey();
      }}
    />
  );
}
