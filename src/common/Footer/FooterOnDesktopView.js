import React from "react";
import AddressColumn from "./AddressColumn";
import { FOOTER_LINK_SETS } from "./constants";
import FooterLinkSet from "./FooterLinkSet";

function FooterOnDesktopView() {
  return (
    <div className="flex flex-row lg:w-9/12 w-3/5 mx-auto gap-x-32 lg:gap-y-0 gap-y-4 ">
      <AddressColumn />
      <div className="flex basis-5/6 lg:flex-row lg:justify-around">
        {FOOTER_LINK_SETS.map((footerLinkSet) => (
          <FooterLinkSet
            key={footerLinkSet[0].text}
            links={[...footerLinkSet]}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterOnDesktopView;
