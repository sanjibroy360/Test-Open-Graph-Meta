import React from "react";

function BenefitsOfUsingMiru({ benefit = {} }) {
  return (
    <div className="basis-[24%] lg:pt-0 pt-8">
      <h4 className="lg:pb-10 pb-6 font-manrope lg:text-4xl text-2xl font-extrabold text-gradient not-italic lg:tracking-[-2px] tracking-[-1px]">
        {benefit.title}
      </h4>
      <p className="font-manrope text-[#777683] text-base font-normal not-italic lg:w-full w-2/3">
        {benefit.description}
      </p>
    </div>
  );
}

export default React.memo(BenefitsOfUsingMiru);
