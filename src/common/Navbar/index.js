import React from "react";
import MiruLogoWithText from "common/MiruLogoWithText/Loadable";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="bg-white min-h-[4rem] py-5 font-bold text-blue-500 mx-auto md:w-9/12 w-full flex items-center justify-between gap-x-8 md:flex-row flex-col gap-y-6">
      <div className="flex md:flex-row flex-col gap-y-4 lg:gap-x-8 md:gap-x-12 gap-x-7 items-center basis-3/5 grow">
        <MiruLogoWithText
          isBlueLogoText={true}
          className="w-full max-w-[90px] min-w-[60px]"
        />
        <NavLinks />
      </div>
      <div className="flex md:flex-row flex-col gap-y-6 items-center lg:basis-1/6 basis-1/5 lg:gap-x-[2.0625rem] gap-x-4 md:justify-between justify-center w-full">
        <NavButtons />
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
