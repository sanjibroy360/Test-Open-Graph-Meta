import React from "react";
import SingleBenefit from "./SingleBenefit";

function Benefits({ benefits = [] }) {
  return (
    <div className="pb-8 flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 sm:gap-y-6 gap-y-4">
      {benefits.map((benefit) => (
        <SingleBenefit benefit={benefit} key={benefit.description} />
      ))}
    </div>
  );
}

export default React.memo(Benefits);
