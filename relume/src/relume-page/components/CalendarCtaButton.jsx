"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { CalendarModal } from "./CalendarModal";

export function CalendarCtaButton(props) {
  return (
    <CalendarModal>
      <Button type="button" {...props} />
    </CalendarModal>
  );
}
