"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useMemo, useState } from "react";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { darkSurfaceButtonClassName } from "../utils/darkSurfaceButton";
import { QUESTIONS, RESULTS, START_ID } from "../survey/nis2Survey";
import { track } from "../../tracking/tracking";

const secondaryLinkClassName =
  "px-0 text-base font-normal normal-case tracking-normal text-white/60 underline-offset-4 hover:text-white hover:underline";

function ProgressBar({ percent, label }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white/50">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden bg-white/15">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
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
      className={`flex w-full cursor-pointer items-center gap-3 border p-4 text-left transition-colors duration-150 ${
        selected
          ? "border-white bg-white text-black"
          : "border-white/25 bg-transparent text-white hover:border-white/50"
      }`}
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center border ${
          selected ? "border-black bg-black" : "border-white/40"
        }`}
      >
        {selected && <span className="size-2 bg-white" />}
      </span>
      <span className="text-sm font-medium md:text-base">{label}</span>
    </button>
  );
}

export function SurveySection({ final, surveyCtaLabel }) {
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

  // Selecting an answer commits it and advances to the next step automatically.
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
    // From the contact screen, return to the question that produced the result.
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setPhase("survey");
    setCurrentId(prev);
    setSelected(answers[prev] ?? "");
    setResultId(null);
  };

  const submitContact = () => {
    if (!canSubmitContact) return;
    // Email znormalizowany dla Enhanced Conversions w GTM (tag czyta {{DLV - email}}).
    const email = contact.email.trim().toLowerCase();
    track("survey_submit", { result: resultId, email });
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

  const canSubmitContact =
    contact.name.trim().length > 1 &&
    contact.surname.trim().length > 1 &&
    contact.company.trim().length > 1 &&
    contact.email.includes("@");

  const isSectorGrid = currentId === "sector1" || currentId === "sector2";

  return (
    <section
      id="ankieta"
      className="scroll-mt-20 bg-black px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 font-semibold text-white">{surveyCtaLabel}</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">{final.h2}</h2>
        </div>

        <div className="mx-auto max-w-xl">
          {phase !== "result" && (
            <ProgressBar
              percent={percent}
              label={phase === "contact" ? "Dane kontaktowe" : `Pytanie ${history.length + 1}`}
            />
          )}

          {/* ---- SURVEY ---- */}
          {phase === "survey" && (
            <div className="mx-auto max-w-lg text-center">
              <h3 className="mb-3 text-2xl font-bold leading-snug md:text-3xl">{q.question}</h3>
              {q.help && (
                <p className="mb-8 text-base leading-relaxed text-white/60">{q.help}</p>
              )}
              {!q.help && <div className="mb-8" />}

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

          {/* ---- CONTACT ---- */}
          {phase === "contact" && (
            <div className="mx-auto max-w-lg text-center">
              <h3 className="mb-3 text-2xl font-bold leading-snug md:text-3xl">
                Gdzie wysłać Twój wynik?
              </h3>
              <p className="mb-8 text-base leading-relaxed text-white/60">
                Przygotujemy klasyfikację i raport z obowiązkami dla Twojej organizacji.
              </p>
              <div className="mx-auto grid max-w-md grid-cols-1 gap-4 text-left sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white">Imię</label>
                  <Input
                    className="rounded-none border-white/30 bg-white text-black"
                    placeholder="Jan"
                    value={contact.name}
                    onChange={setContactField("name")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white">Nazwisko</label>
                  <Input
                    className="rounded-none border-white/30 bg-white text-black"
                    placeholder="Kowalski"
                    value={contact.surname}
                    onChange={setContactField("surname")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-white">Firma</label>
                  <Input
                    className="rounded-none border-white/30 bg-white text-black"
                    placeholder="Nazwa organizacji"
                    value={contact.company}
                    onChange={setContactField("company")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-white">Adres email</label>
                  <Input
                    className="rounded-none border-white/30 bg-white text-black"
                    type="email"
                    placeholder="nazwa@firma.pl"
                    value={contact.email}
                    onChange={setContactField("email")}
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Button
                  variant="secondary-alt"
                  className={`${darkSurfaceButtonClassName} !rounded-none`}
                  disabled={!canSubmitContact}
                  onClick={submitContact}
                >
                  Zobacz wynik
                </Button>
                <button
                  type="button"
                  onClick={backToQuestions}
                  className="text-sm text-white/45 underline-offset-4 hover:text-white/80 hover:underline"
                >
                  ← Wróć do pytań
                </button>
              </div>
            </div>
          )}

          {/* ---- RESULT ---- */}
          {phase === "result" && resultId && (
            <ResultCard
              result={RESULTS[resultId]}
              calendarLabel={final.ctaSecondary}
              onRestart={restart}
            />
          )}

          {phase !== "result" && (
            <div className="mt-12 border-t border-white/15 pt-6 text-center">
              <CalendarCtaButton
                variant="link-alt"
                size="link"
                trackId="talk_link"
                location="ankieta"
                className={secondaryLinkClassName}
              >
                {final.ctaSecondary}
              </CalendarCtaButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ result, calendarLabel, onRestart }) {
  return (
    <div className="mx-auto max-w-lg text-center">
      <div className={`mx-auto mb-6 h-1 w-full max-w-md ${result.accentBar}`} />
      <p className="mb-3 font-semibold text-white/50">Wynik oceny</p>
      <span
        className={`mb-6 inline-block px-4 py-1.5 text-sm font-bold ${result.badgeClass}`}
      >
        {result.badge}
      </span>
      <h3 className="mb-8 text-2xl font-bold leading-snug md:text-3xl">{result.heading}</h3>

      <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        <Button
          variant="secondary-alt"
          data-track="result_pdf"
          className={`${darkSurfaceButtonClassName} !rounded-none`}
          onClick={() => track("result_pdf", { result: result.badge })}
        >
          Pobierz raport PDF
        </Button>
        <CalendarCtaButton
          variant="secondary-alt"
          location="wynik"
          className="!rounded-none !border-white/40 !bg-transparent !text-white hover:!bg-white/10"
        >
          Umów konsultację
        </CalendarCtaButton>
      </div>

      <div className="mx-auto grid max-w-md grid-cols-1 gap-10 text-left md:max-w-none md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">
            Obowiązki
          </h4>
          <ul className="flex flex-col gap-3">
            {result.obligations.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/85 md:text-base">
                <span className="mt-2 size-1.5 shrink-0 bg-white/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">Kary</h4>
          <ul className="flex flex-col gap-3">
            {result.penalties.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/85 md:text-base">
                <span className="mt-2 size-1.5 shrink-0 bg-white/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/15 pt-6">
        <CalendarCtaButton
          variant="link-alt"
          size="link"
          trackId="talk_link"
          location="wynik"
          className={secondaryLinkClassName}
        >
          {calendarLabel}
        </CalendarCtaButton>
        <button type="button" onClick={onRestart} className={secondaryLinkClassName}>
          Wypełnij ponownie
        </button>
      </div>
    </div>
  );
}
