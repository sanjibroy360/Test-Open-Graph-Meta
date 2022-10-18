import React from "react";
import lazyload from "utils/lazyload";
import AllFeatures from "common/MainFeaturesSection/Loadable";
import BenefitsOfUsingMiru from "./BenefitsOfUsingMiru";
import { BENEFITS_OF_USING_MIRU, HERO_SECTION_CONTENT } from "./constants";
import HeroTexts from "./HeroTexts";

const HeroImage = lazyload(() => import("./HeroImage"));

function HeroSection() {
  return (
    <section>
      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, #DED6FB 0%, rgba(222, 214, 251, 0) 100%)",
        }}
      >
        <div className="container lg:py-0 py-4 flex items-center justify-between lg:flex-row flex-col">
          <HeroTexts
            title={HERO_SECTION_CONTENT.title}
            description={HERO_SECTION_CONTENT.description}
            key={HERO_SECTION_CONTENT.title}
          />
          <HeroImage image={HERO_SECTION_CONTENT.image} />
        </div>
      </div>
      <div className="bg-white container flex gap-x-4 justify-between pb-28 lg:flex-row lg:gap-y-0 flex-col sm:gap-y-6 gap-y-4">
        {BENEFITS_OF_USING_MIRU.map((benefit) => (
          <BenefitsOfUsingMiru benefit={benefit} key={benefit.description} />
        ))}
      </div>
      <AllFeatures />
    </section>
  );
}

export default React.memo(HeroSection);
