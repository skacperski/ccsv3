"use client";

import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { CalendarModal } from "./CalendarModal";
import { darkSurfaceButtonClassName } from "../utils/darkSurfaceButton";

export function CalendarCtaButton({ className, variant, ...props }) {
  return (
    <CalendarModal>
      <Button
        type="button"
        variant={variant}
        className={clsx(
          variant === "secondary-alt" && darkSurfaceButtonClassName,
          className,
        )}
        {...props}
      />
    </CalendarModal>
  );
}
