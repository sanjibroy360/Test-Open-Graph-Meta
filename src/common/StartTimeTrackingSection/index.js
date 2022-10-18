import { default as ContentText } from "common/MainFeaturesSection/FeatureText";
import React from "react";
import { SECTION_CONTENT } from "./constants";

function StartTimeTrackingSection() {
  return (
    <section className="bg-white ">
      <div className="container md:flex lg:py-7 py-2 lg:bg-contain bg-cover relative logo-in-background">
        <ContentText
          icon={SECTION_CONTENT.icon}
          texts={SECTION_CONTENT.texts}
          onButtonClickRedirectTo={SECTION_CONTENT.onButtonClickRedirectTo}
          buttonText={SECTION_CONTENT.buttonText}
          buttonType={SECTION_CONTENT.buttonType}
        />
      </div>
    </section>
  );
}

export default StartTimeTrackingSection;
