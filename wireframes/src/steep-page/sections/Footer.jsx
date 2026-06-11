"use client";

import React from "react";
import { CalendarCta } from "../ui";
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

function ContactMini({ person }) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={person.image}
        alt=""
        className="h-14 w-11 flex-shrink-0 rounded-lg object-cover object-top"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-tight text-steep-text">{person.name}</p>
        <p className="mt-0.5 text-xs text-steep-muted">{person.role}</p>
        <div className="mt-1 flex flex-col gap-0.5 text-xs">
          <a
            href={person.phoneHref}
            data-track="contact_phone"
            data-track-location="stopka"
            className="text-steep-gray hover:text-steep-text"
            onClick={() => track("contact_phone", { person: person.name })}
          >
            {person.phone}
          </a>
          <a
            href={`mailto:${person.email}`}
            data-track="contact_email"
            data-track-location="stopka"
            className="truncate text-steep-gray hover:text-steep-text"
            onClick={() => track("contact_email", { person: person.name })}
          >
            {person.email}
          </a>
        </div>
        <CalendarCta
          variant="link"
          location="stopka"
          className="mt-2 !text-xs font-medium"
        >
          ↗ Umów spotkanie
        </CalendarCta>
      </div>
    </div>
  );
}

export function Footer({ footer }) {
  return (
    <footer id="kontakt" className="border-t border-trans-10 bg-steep-bg2">
      <div className="px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CONTACTS.map((p) => (
              <ContactMini key={p.email} person={p} />
            ))}
          </div>
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-steep-muted">
            {LEGAL.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-trans-10 px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="font-semibold tracking-tight text-steep-text">{footer.brand}</p>
          <div className="flex items-center gap-6 text-xs text-steep-gray">
            <a href="#" className="underline underline-offset-4 hover:text-steep-text">
              {footer.privacy}
            </a>
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
