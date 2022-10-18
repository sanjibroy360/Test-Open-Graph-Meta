import React from "react";
import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";
import { CaretRight } from "phosphor-react";

function GetStartedButton({ link = MIRU_APP_SIGN_UP_PAGE }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="blue_btn whitespace-nowrap cursor-pointer md:py-2 md:px-8 py-1.5 px-3">
        <div className="flex items-center justify-between font-bold font-manrope not-italic text-white lg:text-base text-sm">
          <p className="mr-3.5">Get Started</p>
          <div className="md:w-4 w-3">
            <CaretRight weight="bold" size={16} />
          </div>
        </div>
      </button>
    </a>
  );
}

export default React.memo(GetStartedButton);
