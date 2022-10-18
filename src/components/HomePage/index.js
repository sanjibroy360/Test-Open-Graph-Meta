import React from "react";
import BlueDivider from "common/BlueDivider.js/Loadable";
import AllFeatures from "common/MainFeaturesSection/Loadable";
import HeroSection from "./HeroSection/Loadable";
import { Helmet } from "react-helmet-async";
import { PAGE_META } from "./constants";
import DashboardImageOnHeroSection from "assets/hero-section-image.svg";

function HomePage() {
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
        <meta name="og:image" content={DashboardImageOnHeroSection} />
        <meta name="og:site_name" content="Miru" />
      </Helmet>
      <div className="md:pt-20 pt-10">
        <HeroSection />
      </div>
      <div>
        <BlueDivider />
      </div>
      <div>
        <AllFeatures />
      </div>
    </section>
  );
}

export default React.memo(HomePage);
