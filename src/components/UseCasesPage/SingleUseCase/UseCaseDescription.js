import React from "react";
import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";

function UseCaseDescription({ useCaseHeroTexts = {} }) {
  return (
    <div className="basis-2/6 flex flex-col gap-y-6 items-start justify-between">
      <h2 className="font-manrope text-gradient lg:text-5xl sm:text-4xl text-2xl not-italic font-extrabold pb-3 lg:tracking-[-2px] tracking-[-1px]">
        {useCaseHeroTexts.title}
      </h2>
      <p className="text-[#777683] font-manrope font-normal lg:w-full md:w-[80%] w-full text-base">
        {useCaseHeroTexts.description}
      </p>
      <a href={MIRU_APP_SIGN_UP_PAGE} target="_blank" rel="noopener noreferrer">
        <button className="font-manrope not-italic font-bold lg:text-base text-sm  text-[#5B34EA] hover:text-[#7c5dee] cursor-pointer">
          {useCaseHeroTexts.buttonText}
        </button>
      </a>
    </div>
  );
}

export default UseCaseDescription;
