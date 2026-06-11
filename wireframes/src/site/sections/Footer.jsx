"use client";

import React from "react";
import { CalendarCta } from "../lib";
import { track } from "../../tracking/tracking";

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

const LEGAL = [
  "Wypełniając ankietę CyCommSec staje się administratorem Twoich danych osobowych, które przetwarza na zasadach określonych w polityce prywatności.",
  "NIS2 to unijna dyrektywa o cyberbezpieczeństwie, która może objąć Twoją firmę nowymi obowiązkami prawnymi. Wypełnienie ankiety zajmie około 3 minut — na końcu otrzymasz klasyfikację i raport z obowiązkami dla Twojej organizacji.",
  "Zostawiając swój numer telefonu, umożliwiasz nam przypomnienie o niedokończonej ankiecie lub pomoc w razie pytań. Nie martw się — nie będziemy dzwonić bez powodu.",
];

function Contact({ person }) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={person.image}
        alt=""
        className="h-14 w-11 flex-shrink-0 rounded-lg object-cover object-top"
        loading="lazy"
      />
      <div className="min-w-0 text-[13px]">
        <p className="font-semibold leading-tight text-steep-text">{person.name}</p>
        <p className="mt-0.5 text-xs text-steep-muted">{person.role}</p>
        <a
          href={person.phoneHref}
          className="mt-1.5 block text-steep-gray hover:text-steep-text"
          onClick={() => track("contact_phone", { person: person.name })}
        >
          {person.phone}
        </a>
        <a
          href={`mailto:${person.email}`}
          className="block truncate text-steep-gray hover:text-steep-text"
          onClick={() => track("contact_email", { person: person.name })}
        >
          {person.email}
        </a>
        <CalendarCta variant="link" location="stopka" className="mt-1.5 !text-xs font-medium">
          Umów spotkanie ↗
        </CalendarCta>
      </div>
    </div>
  );
}

export function Footer({ footer }) {
  return (
    <footer id="kontakt" className="border-t border-trans-10 bg-steep-bg2">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-14 md:grid-cols-[1fr_2fr] md:py-16 lg:grid-cols-[1fr_1.4fr_1.2fr]">
        <p className="text-[19px] font-semibold tracking-tight text-steep-text">{footer.brand}</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-[13px] font-medium text-steep-muted">Kontakt</p>
            <Contact person={CONTACTS[0]} />
          </div>
          <div className="sm:pt-[29px]">
            <Contact person={CONTACTS[1]} />
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[11px] leading-relaxed text-steep-muted">
          {LEGAL.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-trans-10 px-5 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 text-[13px] text-steep-gray sm:flex-row">
          <a href="#" className="underline-offset-4 hover:text-steep-text hover:underline">
            {footer.privacy}
          </a>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
