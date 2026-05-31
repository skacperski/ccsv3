"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer5() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="rb-12 mb-12 block items-start justify-between md:mb-18 lg:mb-20 lg:flex">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold md:text-md">Biuletyn CyCommSec</h1>
            <p>Otrzymuj porady o NIS2 i bezpieczeństwie.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Twój email"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Zapisz" variant="secondary" size="sm">
                Zapisz
              </Button>
            </form>
            <p className="text-xs">
              Zgadzasz się z naszą Polityką prywatności.
            </p>
          </div>
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <a
            href="#"
            className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Usługi</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Audyt NIS2
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Wdrożenie
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  SOC 24/7
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Pentesty
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Szkolenia
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Informacje</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  O nas
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Blog
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Zasoby
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Kontakt
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Kariera
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Prawne</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Polityka prywatności
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  RODO
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Warunki użytkowania
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Ciasteczka
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Bezpieczeństwo
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Zasoby</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Poradnik NIS2
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Checklist KSC
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Raport branżowy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Szablon audytu
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Webinary
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Społeczność</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn CyCommSec
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Twitter CyCommSec
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  YouTube CyCommSec
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Kontakt bezpośredni
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Zadzwoń do nas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Relume. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
