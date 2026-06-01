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
        className="h-14 w-11 flex-shrink-0 rounded-none object-cover object-top"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-tight">{person.name}</p>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-neutral-500">{person.role}</p>
        <div className="mt-1 flex flex-col gap-0.5 text-xs">
          <a href={person.phoneHref} className="text-neutral-600 hover:text-black">
            {person.phone}
          </a>
          <a href={`mailto:${person.email}`} className="truncate text-neutral-600 hover:text-black">
            {person.email}
          </a>
        </div>
        <CalendarCtaButton
          variant="link"
          size="link"
          title={`Umów spotkanie z ${person.name}`}
          className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-700"
        >
          ↗ Umów spotkanie
        </CalendarCtaButton>
      </div>
    </div>
  );
}

export function Footer({ footer }) {
  return (
    <footer id="kontakt" className="border-t border-border-primary">
      <div className="px-[5%] py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CONTACTS.map((p) => (
              <ContactMini key={p.email} person={p} />
            ))}
          </div>
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-neutral-500">
            {LEGAL.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border-primary px-[5%] py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="font-semibold">{footer.brand}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="underline">
              {footer.privacy}
            </a>
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
