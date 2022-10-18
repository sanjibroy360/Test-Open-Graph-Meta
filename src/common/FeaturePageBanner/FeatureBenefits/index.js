import React from "react";
import Benefit from "./Benefit";

function FeatureBenefits({ featureBenefits = [] }) {
  return (
    <div className="pb-8 flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 sm:gap-y-6 gap-y-4">
      {featureBenefits.map((featureBenefit) => (
        <Benefit
          featureBenefit={featureBenefit}
          key={featureBenefit.description}
        />
      ))}
    </div>
  );
}

export default React.memo(FeatureBenefits);
