import React, { useMemo, useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import { QUESTIONS, RESULTS, START_ID } from "../survey";
import { Btn, CalendarCta } from "./ui";
import { Footer } from "./Footer";
import { openCalendly } from "../lib/calendly";
import { track } from "../tracking";
import { useReveal } from "../hooks/useReveal";

const NAME_TITLES = new Set(["dr", "inż.", "inz.", "mgr", "prof.", "mgr."]);

function ExpertAvatar({ name, photo }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .filter((w) => !NAME_TITLES.has(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (photo && !error) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setError(true)}
        className="size-14 shrink-0 rounded-[5px] object-cover"
      />
    );
  }
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-[5px] bg-white/10 font-mono text-sm font-medium text-white/70">
      {initials}
    </span>
  );
}

function ExpertCard({ expert, ctaLabel, mirrored }) {
  return (
    <div className={`flex gap-4 ${mirrored ? "flex-row-reverse" : ""}`}>
      <ExpertAvatar name={expert.name} photo={expert.photo} />
      <div className={`min-w-0 ${mirrored ? "flex flex-col items-end text-right" : ""}`}>
        <p className="font-medium text-white">{expert.name}</p>
        <p className="font-mono text-[12px] uppercase tracking-wide text-white/50">{expert.role}</p>
        <a
          href={`tel:${expert.phone.replace(/\s+/g, "")}`}
          onClick={() => track("contact_phone", { person: expert.name })}
          className="mt-2 block text-sm text-white/70 transition-colors hover:text-white"
        >
          {expert.phone}
        </a>
        <a
          href={`mailto:${expert.email}`}
          onClick={() => track("contact_email", { person: expert.name })}
          className="block text-sm text-white/70 transition-colors hover:text-white"
        >
          {expert.email}
        </a>
        <button
          type="button"
          onClick={() => {
            track("calendar_open", { location: "wynik" });
            openCalendly();
          }}
          className="mt-3 flex cursor-pointer items-center gap-1.5 font-mono text-[12px] uppercase tracking-wide text-white/60 transition-colors hover:text-white"
        >
          <span aria-hidden>↗</span>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

const inputClassName =
  "w-full rounded-[2px] bg-light px-4 py-2.5 text-[16px] text-ink outline-none transition-colors placeholder:text-soft focus:bg-trans-10";

const TONES = {
  red: { badge: "bg-red text-white", bar: "bg-red" },
  peach: { badge: "bg-light-red text-red-deep", bar: "bg-red-deep" },
  sky: { badge: "bg-light text-gray", bar: "bg-gray" },
  neutral: { badge: "bg-light text-gray", bar: "bg-soft" },
};

function ProgressBar({ percent, label }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between font-mono text-sm font-medium text-gray">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-[2px] bg-trans-10">
        <div
          className="h-full rounded-[2px] bg-red transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function OptionButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center gap-3 rounded-[2px] p-4 text-left transition-colors duration-150 ${
        selected ? "bg-ink text-white" : "bg-light text-ink hover:bg-trans-10"
      }`}
    >
      <span className="flex size-5 shrink-0 items-center justify-center rounded-[2px] bg-white">
        {selected && <span className="size-2 rounded-[2px] bg-red" />}
      </span>
      <span className="text-sm font-medium md:text-[16px]">{label}</span>
    </button>
  );
}

export function Survey({ final, surveyCtaLabel, footer }) {
  const ref = useReveal();
  const cardRef = useRef(null);
  const [phase, setPhase] = useState("survey");
  const [currentId, setCurrentId] = useState(START_ID);
  const [history, setHistory] = useState([]);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState("");
  const [advancing, setAdvancing] = useState(false);
  const [resultId, setResultId] = useState(null);
  const [contact, setContact] = useState({ name: "", surname: "", company: "", email: "" });

  const q = QUESTIONS[currentId];
  const setContactField = (field) => (e) => setContact((c) => ({ ...c, [field]: e.target.value }));

  const percent = useMemo(() => {
    if (phase === "result") return 100;
    if (phase === "contact") return 95;
    const answered = history.length;
    return Math.min(90, Math.round((answered / (answered + 4)) * 100));
  }, [phase, history.length]);

  const animateStep = () => {
    const el = cardRef.current?.querySelector("[data-step]");
    if (el) {
      gsap.fromTo(el, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" });
    }
  };

  const handleSelect = (value) => {
    if (advancing) return;
    setSelected(value);
    setAdvancing(true);
    if (history.length === 0) track("survey_start");
    track("survey_answer", { step: currentId, value });
    window.setTimeout(() => {
      const nextAnswers = { ...answers, [currentId]: value };
      setAnswers(nextAnswers);
      const nx = q.next(value, nextAnswers);
      setHistory((h) => [...h, currentId]);
      if (nx && typeof nx === "object" && nx.result) {
        setResultId(nx.result);
        setPhase("contact");
        track("survey_contact_view", { result: nx.result });
      } else {
        setCurrentId(nx);
        setSelected(nextAnswers[nx] ?? "");
      }
      setAdvancing(false);
      requestAnimationFrame(animateStep);
    }, 160);
  };

  const backToQuestions = () => {
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setPhase("survey");
    setCurrentId(prev);
    setSelected(answers[prev] ?? "");
    setResultId(null);
    requestAnimationFrame(animateStep);
  };

  const canSubmitContact =
    contact.name.trim().length > 1 &&
    contact.surname.trim().length > 1 &&
    contact.company.trim().length > 1 &&
    contact.email.includes("@");

  const submitContact = () => {
    if (!canSubmitContact) return;
    // GŁÓWNA KONWERSJA. Email znormalizowany pod Enhanced Conversions w GTM.
    const email = contact.email.trim().toLowerCase();
    track("survey_submit", { result: resultId, email });
    track("survey_result", { result: resultId });
    setPhase("result");
    requestAnimationFrame(animateStep);
  };

  const restart = () => {
    track("survey_restart");
    setPhase("survey");
    setCurrentId(START_ID);
    setHistory([]);
    setAnswers({});
    setSelected("");
    setResultId(null);
    requestAnimationFrame(animateStep);
  };

  const isSectorGrid = currentId === "sector1" || currentId === "sector2";

  return (
    <section
      id="ankieta"
      ref={ref}
      className="scroll-mt-20 flex flex-col bg-cover bg-center px-5"
      style={{ backgroundImage: "url(/bg/ankieta-background.png)" }}
    >
      <div className="flex min-h-[100svh] items-center py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="mb-4 flex items-center justify-center gap-2 font-mono text-[13px] font-medium uppercase tracking-widest text-white/70">
              <span className="size-1.5 shrink-0 rounded-[2px] bg-red" aria-hidden />
              {surveyCtaLabel}
            </p>
            <h2 className="tech-display text-4xl leading-[1.06] text-white md:text-[48px]">
              {final.h2}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{final.sub}</p>
          </div>

          <div ref={cardRef} data-reveal className="w-full rounded-ui bg-white p-6 md:p-10">
          {phase !== "result" && (
            <ProgressBar
              percent={percent}
              label={phase === "contact" ? "Dane kontaktowe" : `Pytanie ${history.length + 1}`}
            />
          )}

          {phase === "survey" && (
            <div data-step className="mx-auto max-w-lg text-center">
              <h3 className="mb-3 text-xl font-medium tracking-tight md:text-2xl">{q.question}</h3>
              {q.help ? (
                <p className="mb-8 text-[15px] leading-relaxed text-gray">{q.help}</p>
              ) : (
                <div className="mb-8" />
              )}

              <div
                className={`mx-auto grid gap-2 ${
                  q.type === "yesno"
                    ? "max-w-xs grid-cols-2 gap-3 sm:max-w-sm"
                    : isSectorGrid
                      ? "max-w-md grid-cols-1 sm:max-w-lg sm:grid-cols-2"
                      : "max-w-md grid-cols-1"
                }`}
              >
                {q.options.map((o) => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={selected === o.value}
                    onClick={() => handleSelect(o.value)}
                  />
                ))}
              </div>
            </div>
          )}

          {phase === "contact" && (
            <div data-step className="mx-auto max-w-lg text-center">
              <h3 className="mb-3 text-xl font-medium tracking-tight md:text-2xl">
                Gdzie wysłać Twój wynik?
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-gray">
                Przygotujemy klasyfikację i raport z obowiązkami dla Twojej organizacji.
              </p>
              <div className="mx-auto grid max-w-md grid-cols-1 gap-4 text-left sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Imię</label>
                  <input
                    className={inputClassName}
                    placeholder="Jan"
                    value={contact.name}
                    onChange={setContactField("name")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Nazwisko</label>
                  <input
                    className={inputClassName}
                    placeholder="Kowalski"
                    value={contact.surname}
                    onChange={setContactField("surname")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Firma</label>
                  <input
                    className={inputClassName}
                    placeholder="Nazwa organizacji"
                    value={contact.company}
                    onChange={setContactField("company")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Adres email</label>
                  <input
                    className={inputClassName}
                    type="email"
                    placeholder="nazwa@firma.pl"
                    value={contact.email}
                    onChange={setContactField("email")}
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Btn
                  disabled={!canSubmitContact}
                  onClick={submitContact}
                  className="disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Zobacz wynik
                </Btn>
                <button
                  type="button"
                  onClick={backToQuestions}
                  className="cursor-pointer text-sm text-gray underline-offset-4 hover:text-ink hover:underline"
                >
                  ← Wróć do pytań
                </button>
              </div>
            </div>
          )}

          {phase === "result" && resultId && (
            <ResultCard
              result={RESULTS[resultId]}
              resultId={resultId}
              calendarLabel={final.ctaSecondary}
              onRestart={restart}
            />
          )}

          {phase !== "result" && (
            <div className="mt-12 pt-2 text-center">
              <CalendarCta variant="link" location="ankieta" className="text-[16px]">
                {final.ctaSecondary}
              </CalendarCta>
            </div>
          )}
        </div>

          <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2">
            {final.experts?.map((expert, i) => (
              <ExpertCard key={expert.email} expert={expert} ctaLabel={final.contactCta} mirrored={i === 0} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl pb-4">
        <p className="text-center text-[15px] leading-snug text-white/70">
          {final.notes?.join(" ")}
        </p>
      </div>

      <Footer footer={footer} />
    </section>
  );
}

function ResultCard({ result, resultId, calendarLabel, onRestart }) {
  const tone = TONES[result.tone];
  return (
    <div data-step className="mx-auto max-w-lg text-center">
      <div className={`mx-auto mb-6 h-1 w-full max-w-md rounded-[2px] ${tone.bar}`} />
      <p className="mb-3 font-mono text-sm font-medium uppercase tracking-widest text-gray">
        Wynik oceny
      </p>
      <span className={`mb-6 inline-block rounded-[2px] px-4 py-1.5 text-sm font-semibold ${tone.badge}`}>
        {result.badge}
      </span>
      <h3 className="tech-display mb-8 text-2xl leading-snug md:text-3xl">{result.heading}</h3>

      <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
        <Btn onClick={() => track("result_pdf", { result: resultId })}>Pobierz raport PDF</Btn>
        <CalendarCta variant="ghost" location="wynik">Umów konsultację</CalendarCta>
      </div>

      <div className="mx-auto grid max-w-md grid-cols-1 gap-10 text-left md:max-w-none md:grid-cols-2">
        <div>
          <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-soft">
            Obowiązki
          </h4>
          <ul className="flex flex-col gap-3">
            {result.obligations.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-[15px]">
                <span className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-soft">
            Kary
          </h4>
          <ul className="flex flex-col gap-3">
            {result.penalties.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-[15px]">
                <span className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 pt-2">
        <CalendarCta variant="link" location="wynik" className="text-[16px]">
          {calendarLabel}
        </CalendarCta>
        <button
          type="button"
          onClick={onRestart}
          className="cursor-pointer text-sm text-gray underline-offset-4 hover:text-ink hover:underline"
        >
          Wypełnij ponownie
        </button>
      </div>
    </div>
  );
}
