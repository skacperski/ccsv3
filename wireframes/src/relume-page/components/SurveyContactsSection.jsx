"use client";

import React from "react";
import { CalendarCtaButton } from "./CalendarCtaButton";

const CONTACTS = [
  {
    name: "Paweł Punda",
    role: "Head of Compliance",
    phone: "+48 607-647-889",
    phoneHref: "tel:+48607647889",
    email: "pawel.punda@cycommsec.com",
    image: "/contacts/pawel-punda.png",
  },
  {
    name: "dr inż. Michał Suchocki",
    role: "Head of Security",
    phone: "+48 690-882-900",
    phoneHref: "tel:+48690882900",
    email: "michal.suchocki@cycommsec.com",
    image: "/contacts/michal-suchocki.png",
  },
];

function ContactCard({ person }) {
  return (
    <article className="grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,17.5rem)_1fr] sm:gap-x-12 lg:gap-x-16">
      <div className="flex flex-col">
        <img
          src={person.image}
          alt=""
          className="h-auto w-full max-w-[17.5rem]"
          loading="lazy"
        />
        <CalendarCtaButton
          variant="link"
          size="link"
          title={`Umów spotkanie z ${person.name}`}
          className="mt-6 self-start px-0 font-mono text-xs font-normal uppercase tracking-[0.2em] text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
        >
          ↗ Umów spotkanie
        </CalendarCtaButton>
      </div>
      <div className="flex flex-col justify-start pt-1 sm:pt-2">
        <h3 className="text-3xl font-bold leading-tight md:text-4xl">{person.name}</h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          {person.role}
        </p>
        <div className="mt-8 flex flex-col gap-2 text-base md:text-md">
          <a
            href={person.phoneHref}
            className="w-fit underline decoration-neutral-400 underline-offset-4 hover:decoration-black"
          >
            {person.phone}
          </a>
          <a
            href={`mailto:${person.email}`}
            className="w-fit underline decoration-neutral-400 underline-offset-4 hover:decoration-black"
          >
            {person.email}
          </a>
        </div>
      </div>
    </article>
  );
}

export function SurveyContactsSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t border-neutral-200 bg-white px-[5%] py-20 md:py-28 lg:py-32"
      aria-label="Kontakt"
    >
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col gap-20 md:gap-24 lg:max-w-5xl lg:gap-28">
          {CONTACTS.map((person) => (
            <ContactCard key={person.email} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
