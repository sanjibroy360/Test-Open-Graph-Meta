import React from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_META } from "./constants";
import HeroSection from "./HeroSection/Loadable";

function MiruForYouPage() {
  return (
    <>
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
      <section>
        <HeroSection />
      </section>
    </>
  );
}

export default React.memo(MiruForYouPage);
