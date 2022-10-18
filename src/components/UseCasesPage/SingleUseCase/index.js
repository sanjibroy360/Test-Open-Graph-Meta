import React from "react";
import UseCaseDescription from "./UseCaseDescription";
import UseCaseHeroImage from "./UseCaseHeroImage";
import Benefits from "./Benefits/Loadable";

function SingleUseCase({ useCaseDetails = {} }) {
  return (
      <section
        id={useCaseDetails.id}
        style={{ backgroundColor: useCaseDetails.backgroundColor }}
      >
        <div className="container">
          <div
            className={`flex py-20 ${useCaseDetails.flexDirection} lg:justify-between lg:items-center flex-col lg:gap-y-0 gap-y-6`}
          >
            <UseCaseDescription
              useCaseHeroTexts={useCaseDetails.useCaseHeroTexts}
            />
            <UseCaseHeroImage sectionHeroImage={useCaseDetails.image} />
          </div>
          <Benefits benefits={useCaseDetails.benefits} />
        </div>
      </section>
  );
}

export default React.memo(SingleUseCase);
