"use client";

import React, { useMemo, useState } from "react";
import { Btn, CalendarCta, SerifHeading } from "../ui";
import { QUESTIONS, RESULTS, START_ID } from "../../relume-page/survey/nis2Survey";
import { track } from "../../tracking/tracking";

const inputClassName =
  "w-full rounded-xl border border-trans-15 bg-white px-4 py-2.5 text-base text-steep-text outline-none transition-colors placeholder:text-steep-muted focus:border-steep-text";

function ProgressBar({ percent, label }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-steep-gray">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-trans-10">
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
      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border p-4 text-left transition-colors duration-150 ${
        selected
          ? "border-steep-text bg-steep-text text-white"
          : "border-trans-15 bg-white text-steep-text hover:border-trans-20"
      }`}
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-white bg-white" : "border-trans-20"
        }`}
      >
        {selected && <span className="size-2 rounded-full bg-steep-green" />}
      </span>
      <span className="text-sm font-medium md:text-base">{label}</span>
    </button>
  );
}

export function Survey({ final, surveyCtaLabel }) {
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

  const canSubmitContact =
    contact.name.trim().length > 1 &&
    contact.surname.trim().length > 1 &&
    contact.company.trim().length > 1 &&
    contact.email.includes("@");

  const isSectorGrid = currentId === "sector1" || currentId === "sector2";

  return (
    <section id="ankieta" className="scroll-mt-20 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-steep-gray">
            <span className="size-1.5 rounded-full bg-steep-green" aria-hidden />
            {surveyCtaLabel}
          </p>
          <SerifHeading
            text={final.h2}
            className="mb-4 text-4xl leading-[1.08] text-steep-text md:text-5xl"
          />
          <p className="text-steep-gray md:text-lg">{final.sub}</p>
        </div>

        <div className="mx-auto max-w-xl rounded-3xl bg-steep-light-gray p-6 md:p-10">
          {phase !== "result" && (
            <ProgressBar
              percent={percent}
              label={phase === "contact" ? "Dane kontaktowe" : `Pytanie ${history.length + 1}`}
            />
          )}

          {/* ---- SURVEY ---- */}
          {phase === "survey" && (
            <div className="mx-auto max-w-lg text-center">
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-steep-text md:text-2xl">
                {q.question}
              </h3>
              {q.help && (
                <p className="mb-8 text-base leading-relaxed text-steep-gray">{q.help}</p>
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
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-steep-text md:text-2xl">
                Gdzie wysłać Twój wynik?
              </h3>
              <p className="mb-8 text-base leading-relaxed text-steep-gray">
                Przygotujemy klasyfikację i raport z obowiązkami dla Twojej organizacji.
              </p>
              <div className="mx-auto grid max-w-md grid-cols-1 gap-4 text-left sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-steep-text">Imię</label>
                  <input
                    className={inputClassName}
                    placeholder="Jan"
                    value={contact.name}
                    onChange={setContactField("name")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-steep-text">
                    Nazwisko
                  </label>
                  <input
                    className={inputClassName}
                    placeholder="Kowalski"
                    value={contact.surname}
                    onChange={setContactField("surname")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-steep-text">Firma</label>
                  <input
                    className={inputClassName}
                    placeholder="Nazwa organizacji"
                    value={contact.company}
                    onChange={setContactField("company")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-steep-text">
                    Adres email
                  </label>
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
                <Btn disabled={!canSubmitContact} onClick={submitContact} className="disabled:cursor-not-allowed disabled:opacity-40">
                  Zobacz wynik
                </Btn>
                <button
                  type="button"
                  onClick={backToQuestions}
                  className="text-sm text-steep-gray underline-offset-4 hover:text-steep-text hover:underline"
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
            <div className="mt-12 border-t border-trans-10 pt-6 text-center">
              <CalendarCta
                variant="link"
                trackId="talk_link"
                location="ankieta"
                className="text-base"
              >
                {final.ctaSecondary}
              </CalendarCta>
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
      <div className={`mx-auto mb-6 h-1 w-full max-w-md rounded-full ${result.accentBar}`} />
      <p className="mb-3 text-sm font-medium text-steep-gray">Wynik oceny</p>
      <span
        className={`mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold ${result.badgeClass}`}
      >
        {result.badge}
      </span>
      <h3 className="mb-8 font-serif text-2xl italic leading-snug text-steep-text md:text-3xl">
        {result.heading}
      </h3>

      <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
        <Btn data-track="result_pdf" onClick={() => track("result_pdf", { result: result.badge })}>
          Pobierz raport PDF
        </Btn>
        <CalendarCta variant="ghost" location="wynik">
          Umów konsultację
        </CalendarCta>
      </div>

      <div className="mx-auto grid max-w-md grid-cols-1 gap-10 text-left md:max-w-none md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-steep-muted">
            Obowiązki
          </h4>
          <ul className="flex flex-col gap-3">
            {result.obligations.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-steep-text md:text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-steep-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-steep-muted">
            Kary
          </h4>
          <ul className="flex flex-col gap-3">
            {result.penalties.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-steep-text md:text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-steep-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 border-t border-trans-10 pt-6">
        <CalendarCta variant="link" trackId="talk_link" location="wynik" className="text-base">
          {calendarLabel}
        </CalendarCta>
        <button
          type="button"
          onClick={onRestart}
          className="text-sm text-steep-gray underline-offset-4 hover:text-steep-text hover:underline"
        >
          Wypełnij ponownie
        </button>
      </div>
    </div>
  );
}
