import React from "react";
import { CONTENT_TYPES } from "./constants";
import FeatureText from "./FeatureText";
import MiruScreenImage from "./MiruScreenImage";

function SingleFeature({ sectionDetails = {}, sectionNo = 1 }) {
  return (
    <section style={{ background: `${sectionDetails.backgroundColor}` }}>
      <div
        className={`container lg:py-20 py-12 flex md:flex-row md:gap-x-20 ${
          sectionNo === 2 ? "flex-col-reverse" : "flex-col"
        } gap-y-10 items-center justify-between`}
      >
        {sectionDetails.contents.map((content) =>
          content.type === CONTENT_TYPES.TEXT ? (
            <FeatureText
              key={content.texts.title}
              icon={content.icon}
              texts={content.texts}
              buttonText={content.buttonText}
              onLearnMoreBtnClickRedirectTo={content.redirectTo}
            />
          ) : (
            <MiruScreenImage key={content.id} image={content.image} />
          )
        )}
      </div>
    </section>
  );
}

export default React.memo(SingleFeature);
