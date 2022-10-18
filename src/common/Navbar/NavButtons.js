import React from "react";
import { NAVBAR_BUTTONS } from "./constants";

function NavButtons() {
  return (
    <>
      <div>
        <button className="text-[#5B34EA] hover:text-[#7C5DEE] cursor-pointer lg:text-base text-sm font-manrope font-bold whitespace-nowrap ">
          <a
            href={NAVBAR_BUTTONS.SIGN_IN.redirectTo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {NAVBAR_BUTTONS.SIGN_IN.name}
          </a>
        </button>
      </div>
      <div>
        <a
          href={NAVBAR_BUTTONS.TRY_MIRU.redirectTo}
          target="_blank"
          rel="noopener noreferrer"
          className="blue_btn py-[0.5625rem] px-[0.75rem] whitespace-nowrap cursor-pointer font-manrope lg:text-base text-sm"
        >
          <button>{NAVBAR_BUTTONS.TRY_MIRU.name}</button>
        </a>
      </div>
    </>
  );
}

export default NavButtons;
