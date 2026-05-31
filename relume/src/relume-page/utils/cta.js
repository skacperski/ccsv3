export const SURVEY_SECTION_ID = "ankieta";

export function scrollToSurvey() {
  document.getElementById(SURVEY_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
}
