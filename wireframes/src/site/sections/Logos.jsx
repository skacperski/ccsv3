"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

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

function Row({ ariaHidden = false }) {
  return (
    <div data-track-row className="flex w-max shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          className="h-8 w-auto max-w-[8rem] object-contain opacity-55 grayscale md:h-9"
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function Logos({ caption }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-track-row]", { xPercent: -100, ease: "none", duration: 70, repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-12 md:py-16">
      <p className="mb-9 text-center text-[15px] text-steep-gray">{caption}</p>
      <div className="flex overflow-hidden">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
