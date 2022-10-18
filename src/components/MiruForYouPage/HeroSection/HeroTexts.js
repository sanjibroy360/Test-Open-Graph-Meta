import React from "react";
import GetStartedButton from "common/GetStartedButton";
import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";

function HeroTexts({ title = "", description = "" }) {
  return (
    <div className="lg:py-36 lg:mr-28">
      <h3 className="text-gradient font-manrope lg:text-6xl sm:text-4xl text-2xl font-extrabold not-italic">
        {title}
      </h3>
      <p className="font-manrope not-italic font-normal text-base text-[#5B34EA] py-6 md:w-[57%]">
        {description}
      </p>
      <div className="mb-5">
        <GetStartedButton link={MIRU_APP_SIGN_UP_PAGE} />
      </div>
    </div>
  );
}

export default React.memo(HeroTexts);
