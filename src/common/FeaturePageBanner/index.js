import React from "react";
import FeatureBenefits from "./FeatureBenefits/Loadable";
import FeatureDescription from "./FeatureDescription";
import MiruFeatureScreenImage from "./MiruFeatureScreenImage";

function FeaturePageBanner({
  featureTexts = "",
  featureScreenImage = "",
  featureBenefits = [],
}) {
  return (
    <section className="miru-grey-gradient-background">
      <div className="container">
        <div className="flex py-20 lg:flex-row flex-col lg:gap-y-0 gap-y-6">
          <FeatureDescription featureTexts={featureTexts} />
          <MiruFeatureScreenImage featureScreenImage={featureScreenImage} />
        </div>
        <FeatureBenefits featureBenefits={featureBenefits} />
      </div>
    </section>
  );
}

export default React.memo(FeaturePageBanner);
