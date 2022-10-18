import React from "react";

function Benefit({ benefit = {} }) {
  return (
    <div className="basis-[33%] flex flex-col justify-around">
      <h3 className="font-manrope text-gradient lg:text-[40px] lg:leading-[44px] lg:tracking-[-2px] tracking-[-1px]  text-2xl font-extrabold lg:pb-10 pb-5 mb-auto">
        {benefit.title}
      </h3>
      <p
        className={`lg:w-full md:w-3/4 w-full font-manrope font-normal not-italic text-[#777683] text-base pb-8 ${benefit.classNames}`}
      >
        {benefit.description}
      </p>
    </div>
  );
}

export default React.memo(Benefit);
