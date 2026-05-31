"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
  useMediaQuery,
} from "@relume_io/relume-ui";

const DEFAULT_TITLE = "Umów rozmowę";
const DEFAULT_DESCRIPTION =
  "Zostaw kontakt — oddzwonimy w ciągu 48 h. Wkrótce podłączymy rezerwację online (Calendly).";

export function CalendarModal({ children, title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const isTablet = useMediaQuery("(max-width: 767px)");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        closeIconPosition={isTablet ? "inside" : "outside"}
        overlayClassName="bg-black/25"
        className="fixed left-1/2 top-1/2 flex h-screen flex-col overflow-y-scroll border-t bg-neutral-white px-[5%] pb-28 pt-12 md:h-auto md:max-h-[80vh] md:w-[90%] md:p-12 lg:w-full lg:max-w-sm lg:p-12"
      >
        <div className="mb-6 text-center md:mb-8">
          <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p>{description}</p>
        </div>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="calendar-name" className="mb-2">
              Imię i nazwisko*
            </Label>
            <Input
              id="calendar-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="calendar-email" className="mb-2">
              Email służbowy*
            </Label>
            <Input
              type="email"
              id="calendar-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" title="Wyślij prośbę o kontakt">
            Wyślij prośbę o kontakt
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
