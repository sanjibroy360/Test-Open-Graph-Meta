import React from "react";
import FeaturePageBanner from "common/FeaturePageBanner/Loadable";
import { FEATURE_DETAILS, PAGE_META } from "./constants";
import StartTimeTrackingSection from "common/StartTimeTrackingSection/Loadable";
import BlueDivider from "common/BlueDivider.js/Loadable";
import { Helmet } from "react-helmet-async";

function TimeTrackingFeaturePage() {
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
      <FeaturePageBanner
        featureTexts={FEATURE_DETAILS.featureTexts}
        featureScreenImage={FEATURE_DETAILS.featureScreenImage}
        featureBenefits={FEATURE_DETAILS.benefits}
      />
      <BlueDivider />
      <StartTimeTrackingSection />
    </section>
  );
}

export default React.memo(TimeTrackingFeaturePage);
