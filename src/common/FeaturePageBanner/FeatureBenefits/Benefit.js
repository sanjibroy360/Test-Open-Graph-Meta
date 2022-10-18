import React from "react";

function Benefit({ featureBenefit = {} }) {
  return (
    <div className="basis-[32.5%]">
      <h2 className="font-manrope text-gradient lg:text-4xl text-2xl font-extrabold lg:pb-10 pb-5 lg:tracking-[-2px] tracking-[-1px]">
        {featureBenefit.title}
      </h2>
      <p className="lg:w-full md:w-3/4 w-full font-manrope font-normal not-italic text-[#777683] text-base pb-8">
        {featureBenefit.description}
      </p>
    </div>
  );
}

export default React.memo(Benefit);
