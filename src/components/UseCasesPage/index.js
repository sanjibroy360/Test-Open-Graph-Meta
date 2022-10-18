import React from "react";
import SingleUseCase from "./SingleUseCase/Loadable";
import StartTimeTrackingSection from "common/StartTimeTrackingSection";
import BlueDivider from "common/BlueDivider.js/Loadable";
import { PAGE_META, USE_CASES_PAGE_CONTENT } from "./constants";
import { Helmet } from "react-helmet-async";

function UseCasesPage() {
  return (
    <section>
      <Helmet>
        <title>{PAGE_META.TITLE}</title>
        <meta name="description" content={PAGE_META.DESCRIPTION} />
        <meta name="keywords" content={PAGE_META.KEYWORDS} />
        <link rel="canonical" href={PAGE_META.CANONICAL_URL} />
        <meta name="og:title" content={PAGE_META.TITLE} />
        <meta name="og:description" content={PAGE_META.DESCRIPTION} />
        <meta name="og:url" content={PAGE_META.CANONICAL_URL} />
        <meta name="og:type" content="article" />
        <meta name="og:site_name" content="Miru" />
      </Helmet>
      {USE_CASES_PAGE_CONTENT.map((useCaseDetails) => (
        <SingleUseCase
          useCaseDetails={useCaseDetails}
          key={useCaseDetails.useCaseHeroTexts.title}
        />
      ))}
      <BlueDivider />
      <StartTimeTrackingSection />
    </section>
  );
}

export default UseCasesPage;
