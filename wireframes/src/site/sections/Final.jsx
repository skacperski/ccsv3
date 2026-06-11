"use client";

import React, { useMemo, useState } from "react";
import { Serif, Pill, CalendarCta, SURVEY_SECTION_ID } from "../lib";
import { QUESTIONS, RESULTS, START_ID } from "../../relume-page/survey/nis2Survey";
import { track } from "../../tracking/tracking";

/* steep.app "Get started for free" split: serif heading + copy on the
   left, visual on the right — here the visual IS the product: the NIS2
   survey in a rounded panel. */

const inputClassName =
  "w-full rounded-xl border border-trans-15 bg-white px-4 py-2.5 text-[15px] text-steep-text outline-none transition-colors placeholder:text-steep-muted focus:border-steep-text";

function ProgressBar({ percent, label }) {
  return (
    <div className="mb-7">
      <div className="mb-2 flex items-center justify-between text-[13px] font-medium text-steep-gray">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-trans-10">
        <div
          className="h-full rounded-full bg-steep-green transition-all duration-300 ease-out"
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
      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-left transition-colors duration-150 ${
        selected
          ? "border-steep-text bg-steep-text text-white"
          : "border-trans-10 bg-white text-steep-text hover:border-trans-20"
      }`}
    >
      <span
        className={`flex size-[18px] shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-white bg-white" : "border-trans-20"
        }`}
      >
        {selected && <span className="size-2 rounded-full bg-steep-green" />}
      </span>
      <span className="text-[14px] font-medium">{label}</span>
    </button>
  );
}

function Survey({ ctaSecondary }) {
  const [phase, setPhase] = useState("survey"); // survey | contact | result
  const [currentId, setCurrentId] = useState(START_ID);
  const [history, setHistory] = useState([]);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState("");
  const [advancing, setAdvancing] = useState(false);
  const [resultId, setResultId] = useState(null);
  const [contact, setContact] = useState({ name: "", surname: "", company: "", email: "" });

  const q = QUESTIONS[currentId];
  const setContactField = (field) => (e) =>
    setContact((c) => ({ ...c, [field]: e.target.value }));

  const percent = useMemo(() => {
    if (phase === "result") return 100;
    if (phase === "contact") return 95;
    const answered = history.length;
    return Math.min(90, Math.round((answered / (answered + 4)) * 100));
  }, [phase, history.length]);

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
    }, 160);
  };

  const backToQuestions = () => {
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setPhase("survey");
    setCurrentId(prev);
    setSelected(answers[prev] ?? "");
    setResultId(null);
  };

  const canSubmitContact =
    contact.name.trim().length > 1 &&
    contact.surname.trim().length > 1 &&
    contact.company.trim().length > 1 &&
    contact.email.includes("@");

  const submitContact = () => {
    if (!canSubmitContact) return;
    track("survey_submit", { result: resultId });
    track("survey_result", { result: resultId });
    console.log("Survey submit:", { answers, contact, result: resultId });
    setPhase("result");
  };

  const restart = () => {
    track("survey_restart");
    setPhase("survey");
    setCurrentId(START_ID);
    setHistory([]);
    setAnswers({});
    setSelected("");
    setResultId(null);
  };

  const isSectorGrid = currentId === "sector1" || currentId === "sector2";
  const result = resultId ? RESULTS[resultId] : null;

  return (
    <div className="rounded-[24px] bg-steep-light-gray p-6 md:p-8">
      {phase !== "result" && (
        <ProgressBar
          percent={percent}
          label={phase === "contact" ? "Dane kontaktowe" : `Pytanie ${history.length + 1}`}
        />
      )}

      {phase === "survey" && (
        <div>
          <h3 className="mb-2 text-[18px] font-semibold tracking-tight text-steep-text">
            {q.question}
          </h3>
          {q.help && <p className="mb-5 text-[14px] leading-relaxed text-steep-gray">{q.help}</p>}
          {!q.help && <div className="mb-5" />}
          <div
            className={`grid gap-2 ${
              q.type === "yesno" ? "grid-cols-2" : isSectorGrid ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
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
        <div>
          <h3 className="mb-2 text-[18px] font-semibold tracking-tight text-steep-text">
            Gdzie wysłać Twój wynik?
          </h3>
          <p className="mb-5 text-[14px] leading-relaxed text-steep-gray">
            Przygotujemy klasyfikację i raport z obowiązkami dla Twojej organizacji.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input className={inputClassName} placeholder="Imię" value={contact.name} onChange={setContactField("name")} />
            <input className={inputClassName} placeholder="Nazwisko" value={contact.surname} onChange={setContactField("surname")} />
            <input className={`${inputClassName} sm:col-span-2`} placeholder="Firma" value={contact.company} onChange={setContactField("company")} />
            <input className={`${inputClassName} sm:col-span-2`} type="email" placeholder="Adres email" value={contact.email} onChange={setContactField("email")} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Pill disabled={!canSubmitContact} onClick={submitContact} className="disabled:cursor-not-allowed disabled:opacity-40">
              Zobacz wynik
            </Pill>
            <button
              type="button"
              onClick={backToQuestions}
              className="text-[13px] text-steep-gray underline-offset-4 hover:text-steep-text hover:underline"
            >
              ← Wróć do pytań
            </button>
          </div>
        </div>
      )}

      {phase === "result" && result && (
        <div>
          <div className={`mb-5 h-1 w-full rounded-full ${result.accentBar}`} />
          <p className="mb-2 text-[13px] font-medium text-steep-gray">Wynik oceny</p>
          <span className={`mb-4 inline-block rounded-full px-3.5 py-1 text-[13px] font-bold ${result.badgeClass}`}>
            {result.badge}
          </span>
          <h3 className="mb-6 font-serif text-[24px] italic leading-snug text-steep-text">
            {result.heading}
          </h3>
          <div className="mb-6 flex flex-wrap gap-3">
            <Pill data-track="result_pdf" onClick={() => track("result_pdf", { result: result.badge })}>
              Pobierz raport PDF
            </Pill>
            <CalendarCta variant="ghost" location="wynik" className="!bg-white hover:!bg-white/80">
              Umów konsultację
            </CalendarCta>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-steep-muted">
                Obowiązki
              </h4>
              <ul className="flex flex-col gap-2">
                {result.obligations.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-steep-text">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-steep-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-steep-muted">
                Kary
              </h4>
              <ul className="flex flex-col gap-2">
                {result.penalties.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-steep-text">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-steep-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={restart}
            className="mt-6 text-[13px] text-steep-gray underline-offset-4 hover:text-steep-text hover:underline"
          >
            Wypełnij ponownie
          </button>
        </div>
      )}

      {phase !== "result" && ctaSecondary && (
        <div className="mt-7 border-t border-trans-10 pt-5 text-center">
          <CalendarCta variant="link" trackId="talk_link" location="ankieta" className="!text-[14px] font-normal !text-steep-gray hover:!text-steep-text">
            {ctaSecondary}
          </CalendarCta>
        </div>
      )}
    </div>
  );
}

export function Final({ final, surveyCtaLabel }) {
  return (
    <section id={SURVEY_SECTION_ID} className="scroll-mt-20 px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-28">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-steep-gray">
            <span className="size-1.5 rounded-full bg-steep-green" aria-hidden />
            {surveyCtaLabel}
          </p>
          <Serif
            text={final.h2}
            italicWords={3}
            className="mb-5 text-[40px] leading-[1.02] text-steep-text md:text-[56px]"
          />
          <p className="mb-8 max-w-md text-[17px] leading-relaxed text-steep-gray">{final.sub}</p>
        </div>
        <div data-reveal>
          <Survey ctaSecondary={final.ctaSecondary} />
        </div>
      </div>
    </section>
  );
}
