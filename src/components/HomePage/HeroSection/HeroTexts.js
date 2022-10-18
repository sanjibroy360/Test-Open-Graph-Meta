import React from "react";
import { MIRU_SERVES } from "components/HomePage/HeroSection/constants";
import GetStartedButton from "common/GetStartedButton/Loadable";
import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";

function HeroTexts() {
  return (
    <div>
      <h1 className="lg:tracking-[-3px] tracking-tight font-extrabold text-gradient w-full lg:w-[57%] lg:text-hero-text sm:text-4xl text-2xl md:pb-12 pb-10 relative top-3">
        Onestop&nbsp;
        <br className="lg:block hidden" />
        open source&nbsp;
        <br />
        solution for&nbsp;
        <br className="lg:block hidden" />
        time tracking&nbsp;
        <br className="lg:block hidden" />& invoicing
      </h1>
      <p className="font-manrope font-normal not-italic text-base text-[#1D1A31] w-11/12 lg:w-[50.5%] sm:w-[95%]">
        {MIRU_SERVES}
      </p>
      <div className="md:my-10 my-5">
        <GetStartedButton link={MIRU_APP_SIGN_UP_PAGE} />
      </div>
    </div>
  );
}

export default React.memo(HeroTexts);
