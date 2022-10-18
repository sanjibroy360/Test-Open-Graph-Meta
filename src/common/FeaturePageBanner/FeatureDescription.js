import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";
import React from "react";

function FeatureDescription({ featureTexts = {} }) {
  return (
    <div className="basis-2/4 flex flex-col gap-y-6 items-start justify-between">
      <div className="sm:mx-0 mx-auto">
        <img
          src={featureTexts.icon}
          width="40"
          height="40"
          alt=""
          loading="eager"
          decoding="async"
          className="object-contain"
        />
      </div>
      <h1 className="font-manrope text-gradient lg:text-6xl sm:text-4xl text-2xl not-italic font-extrabold pb-3 lg:tracking-[-3px] ">
        {featureTexts.title}
      </h1>
      <p className="text-[#777683] font-manrope font-normal lg:w-[67%] md:w-[80%] w-full text-base">
        {featureTexts.description}
      </p>
      <a href={MIRU_APP_SIGN_UP_PAGE} target="_blank" rel="noopener noreferrer">
        <button className="font-manrope not-italic font-bold lg:text-base text-sm  text-[#5B34EA] hover:text-[#7c5dee] cursor-pointer">
          {featureTexts.buttonText}
        </button>
      </a>
    </div>
  );
}

export default FeatureDescription;
