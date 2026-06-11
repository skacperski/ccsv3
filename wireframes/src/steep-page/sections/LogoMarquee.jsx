"use client";

import React from "react";

/** Client logos exported from Figma ("Zaufali nam" board) → /public/logos/. */
const LOGOS = [
  { src: "/logos/ing.png", alt: "ING" },
  { src: "/logos/zabka.svg", alt: "Żabka" },
  { src: "/logos/gpw.png", alt: "GPW" },
  { src: "/logos/lg.svg", alt: "LG" },
  { src: "/logos/bank-millennium.png", alt: "Bank Millennium" },
  { src: "/logos/selgros.png", alt: "Selgros" },
  { src: "/logos/paypo.png", alt: "PayPo" },
  { src: "/logos/ministerstwo-rozwoju.svg", alt: "Ministerstwo Rozwoju i Technologii" },
  { src: "/logos/cedrob.png", alt: "Cedrob" },
  { src: "/logos/velo-bank.png", alt: "VeloBank" },
  { src: "/logos/gatx.png", alt: "GATX" },
  { src: "/logos/symfonia.png", alt: "Symfonia" },
  { src: "/logos/atman.png", alt: "Atman" },
  { src: "/logos/uniwersytet-swps.png", alt: "Uniwersytet SWPS" },
  { src: "/logos/rpower.png", alt: "R.Power" },
  { src: "/logos/werner-kenkel.png", alt: "Werner Kenkel" },
  { src: "/logos/idosell.png", alt: "IdoSell" },
  { src: "/logos/mhc-mobility.png", alt: "MHC Mobility" },
  { src: "/logos/goelett.png", alt: "Goelett" },
  { src: "/logos/cke.png", alt: "Centralna Komisja Egzaminacyjna" },
  { src: "/logos/hesabe.png", alt: "Hesabe" },
  { src: "/logos/duda-cars.png", alt: "Duda-Cars" },
  { src: "/logos/kuchnia-vikinga.png", alt: "Kuchnia Vikinga" },
  { src: "/logos/up-lublin.png", alt: "Uniwersytet Przyrodniczy w Lublinie" },
  { src: "/logos/seka.png", alt: "SEKA" },
  { src: "/logos/quanta.png", alt: "Quanta" },
  { src: "/logos/bs-leczna.png", alt: "Bank Spółdzielczy w Łęcznej" },
  { src: "/logos/ventor.png", alt: "Ventor" },
  { src: "/logos/hrk.png", alt: "HRK" },
  { src: "/logos/mpgk-wolin.png", alt: "MPGK Wolin" },
  { src: "/logos/nomad-electric.png", alt: "Nomad Electric" },
];

function Track({ ariaHidden = false }) {
  return (
    <div
      className="animate-marquee flex w-max shrink-0 items-center gap-14 pr-14"
      aria-hidden={ariaHidden}
    >
      {LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          className="h-9 w-auto max-w-[8.5rem] object-contain opacity-60 grayscale"
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function LogoMarquee({ caption }) {
  return (
    <section id="zaufali" className="border-y border-trans-5 py-10 md:py-12">
      <p className="mb-8 text-center text-sm font-medium text-steep-gray">{caption}</p>
      <div className="flex overflow-hidden">
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}
