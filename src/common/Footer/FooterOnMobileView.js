import React from "react";
import AddressColumn from "./AddressColumn";
import { FOOTER_LINK_SETS } from "./constants";
import CopyrightText from "./CopyrightText";
import FooterLinkSet from "./FooterLinkSet";
import SocialMediaLinks from "./SocialMediaLinks";

function FooterOnMobileView() {
  return (
    <div className="lg:w-full md:w-11/12 w-full px-5 mx-auto">
      <AddressColumn />
      <div className="mb-4">
        <SocialMediaLinks />
      </div>
      <div className="flex flex-row justify-between lg:flex-nowrap flex-wrap gap-y-8">
        {FOOTER_LINK_SETS.map((footerLinkSet) => (
          <FooterLinkSet
            key={footerLinkSet[0].text}
            links={[...footerLinkSet]}
          />
        ))}
      </div>
      <div className="mt-7">
        <CopyrightText />
      </div>
    </div>
  );
}

export default FooterOnMobileView;
