import React from "react";
import MiruLogoWithText from "common/MiruLogoWithText/Loadable";
import SocialMediaLinks from "./SocialMediaLinks";
import CopyrightText from "./CopyrightText";
import { OFFICE_LOCATION_IN_GOOGLE_MAP } from "constants/routes";

function AddressColumn() {
  return (
    <div className="basis-2/12">
      <div className="pb-2 relative bottom-2">
        <MiruLogoWithText className="w-28" />
      </div>
      <a
        href={OFFICE_LOCATION_IN_GOOGLE_MAP}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="font-manrope not-italic font-normal text-sm text-white pb-7">
          475 Clermont Avenue <span className="lg:hidden inline">, </span>
          <br className="lg:block hidden" />
          Apartment 1232<span className="lg:hidden inline">, </span>
          <br className="lg:block md:hidden block" />
          Brooklyn<span className="lg:hidden inline">, </span>
          <br className="lg:block hidden" />
          NY-11238
        </p>
      </a>
      <div className="lg:block hidden">
        <SocialMediaLinks />
        <CopyrightText />
      </div>
    </div>
  );
}

export default React.memo(AddressColumn);
