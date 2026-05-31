import React from "react";
import { Navbar3 } from "./components/Navbar3";
import { Header76 } from "./components/Header76";
import { ScopeSection } from "./components/ScopeSection";
import { Layout312 } from "./components/Layout312";
import { Layout356 } from "./components/Layout356";
import { Layout373 } from "./components/Layout373";
import { Testimonial37 } from "./components/Testimonial37";
import { Pricing20 } from "./components/Pricing20";
import { Comparison5 } from "./components/Comparison5";
import { Faq1 } from "./components/Faq1";
import { SurveySection } from "./components/SurveySection";
import { Footer } from "./components/Footer";

export default function Page({ content }) {
  return (
    <div>
      <Navbar3 nav={content.nav} />
      <Header76 hero={content.hero} />
      <ScopeSection scope={content.scope} />
      <Layout312 risk={content.risk} />
      <Layout356 service={content.service} />
      <Layout373 how={content.how} surveyCta={content.hero.ctaPrimary} />
      <Testimonial37 proof={content.proof} />
      <Pricing20 pricing={content.pricing} />
      {!content.hideCompare && <Comparison5 compare={content.compare} />}
      <Faq1 faq={content.faq} />
      <SurveySection final={content.final} />
      <Footer footer={content.footer} />
    </div>
  );
}
