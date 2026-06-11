"use client";

import React, { useMemo, useState } from "react";
import { Btn, CalendarCta, SURVEY_SECTION_ID } from "../lib";
import { QUESTIONS, RESULTS, START_ID } from "../../relume-page/survey/nis2Survey";
import { track } from "../../tracking/tracking";

/* awesomic "You are one call away from a top creative team" finale:
   huge dark rounded band; left column copy, right column the survey as
   a white rounded card. */

const inputClassName =
  "w-full rounded-[14px] border border-awe-200 bg-white px-4 py-2.5 text-[15px] text-awe-950 outline-none transition-colors placeholder:text-awe-400 focus:border-awe-950";

function ProgressBar({ percent, label }) {
  return (
    <div className="mb-7">
      <div className="mb-2 flex items-center justify-between text-[13px] font-semibold text-awe-500">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-awe-100">
        <div
          className="h-full rounded-full bg-awe-orange transition-all duration-300 ease-out"
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
      className={`flex w-full cursor-pointer items-center gap-3 rounded-[14px] border p-3.5 text-left transition-colors duration-150 ${
        selected
          ? "border-awe-950 bg-awe-950 text-white"
          : "border-awe-200 bg-white text-awe-950 hover:border-awe-400"
      }`}
    >
      <span
        className={`flex size-[18px] shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-white bg-white" : "border-awe-300"
        }`}
      >
        {selected && <span className="size-2 rounded-full bg-awe-orange" />}
      </span>
      <span className="text-[14px] font-semibold">{label}</span>
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
    <div className="rounded-[24px] bg-white p-6 md:p-8">
      {phase !== "result" && (
        <ProgressBar
          percent={percent}
          label={phase === "contact" ? "Dane kontaktowe" : `Pytanie ${history.length + 1}`}
        />
      )}

      {phase === "survey" && (
        <div>
          <h3 className="mb-2 text-[18px] font-bold tracking-tight text-awe-950">{q.question}</h3>
          {q.help && <p className="mb-5 text-[14px] leading-relaxed text-awe-600">{q.help}</p>}
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
          <h3 className="mb-2 text-[18px] font-bold tracking-tight text-awe-950">
            Gdzie wysłać Twój wynik?
          </h3>
          <p className="mb-5 text-[14px] leading-relaxed text-awe-600">
            Przygotujemy klasyfikację i raport z obowiązkami dla Twojej organizacji.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input className={inputClassName} placeholder="Imię" value={contact.name} onChange={setContactField("name")} />
            <input className={inputClassName} placeholder="Nazwisko" value={contact.surname} onChange={setContactField("surname")} />
            <input className={`${inputClassName} sm:col-span-2`} placeholder="Firma" value={contact.company} onChange={setContactField("company")} />
            <input className={`${inputClassName} sm:col-span-2`} type="email" placeholder="Adres email" value={contact.email} onChange={setContactField("email")} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Btn disabled={!canSubmitContact} onClick={submitContact} className="disabled:cursor-not-allowed disabled:opacity-40">
              Zobacz wynik
            </Btn>
            <button
              type="button"
              onClick={backToQuestions}
              className="text-[13px] font-medium text-awe-500 underline-offset-4 hover:text-awe-950 hover:underline"
            >
              ← Wróć do pytań
            </button>
          </div>
        </div>
      )}

      {phase === "result" && result && (
        <div>
          <div className={`mb-5 h-1.5 w-full rounded-full ${result.accentBar}`} />
          <p className="mb-2 text-[13px] font-semibold text-awe-500">Wynik oceny</p>
          <span className={`mb-4 inline-block rounded-full px-3.5 py-1 text-[13px] font-bold ${result.badgeClass}`}>
            {result.badge}
          </span>
          <h3 className="mb-6 text-[22px] font-bold leading-snug tracking-tight text-awe-950">
            {result.heading}
          </h3>
          <div className="mb-6 flex flex-wrap gap-3">
            <Btn data-track="result_pdf" onClick={() => track("result_pdf", { result: result.badge })}>
              Pobierz raport PDF
            </Btn>
            <CalendarCta variant="ghost" location="wynik">
              Umów konsultację
            </CalendarCta>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-awe-400">
                Obowiązki
              </h4>
              <ul className="flex flex-col gap-2">
                {result.obligations.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-awe-800">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-awe-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-awe-400">
                Kary
              </h4>
              <ul className="flex flex-col gap-2">
                {result.penalties.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-awe-800">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-awe-950" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={restart}
            className="mt-6 text-[13px] font-medium text-awe-500 underline-offset-4 hover:text-awe-950 hover:underline"
          >
            Wypełnij ponownie
          </button>
        </div>
      )}

      {phase !== "result" && ctaSecondary && (
        <div className="mt-7 border-t border-awe-150 pt-5 text-center">
          <CalendarCta variant="link" trackId="talk_link" location="ankieta" className="!text-[14px]">
            {ctaSecondary}
          </CalendarCta>
        </div>
      )}
    </div>
  );
}

export function Final({ final, surveyCtaLabel }) {
  return (
    <section id={SURVEY_SECTION_ID} className="scroll-mt-20 px-3 py-8 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-awe-950 px-6 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-semibold text-white/60">
              <span className="size-1.5 rounded-full bg-awe-orange" aria-hidden />
              {surveyCtaLabel}
            </p>
            <h2 className="mb-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px]">
              {final.h2}
            </h2>
            <p className="max-w-md text-[16px] leading-relaxed text-white/60 md:text-lg">
              {final.sub}
            </p>
          </div>
          <div data-reveal>
            <Survey ctaSecondary={final.ctaSecondary} />
          </div>
        </div>
      </div>
    </section>
  );
}
