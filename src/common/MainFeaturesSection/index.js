import StartTimeTrackingSection from "common/StartTimeTrackingSection/Loadable";
import React from "react";
import { MAIN_FEATURES } from "./constants";
import SingleFeature from "./SingleFeature";

function MainFeaturesSection() {
  return (
    <section>
      {MAIN_FEATURES.map((sectionDetails, index) => (
        <SingleFeature
          key={sectionDetails.id}
          sectionDetails={sectionDetails}
          sectionNo={index + 1}
        />
      ))}
      <StartTimeTrackingSection />
    </section>
  );
}

export default React.memo(MainFeaturesSection);
