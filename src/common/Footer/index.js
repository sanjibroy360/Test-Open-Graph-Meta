import React from "react";
import FooterOnDesktopView from "./FooterOnDesktopView";
import FooterOnMobileView from "./FooterOnMobileView";

function Footer() {
  return (
    <footer className="bg-[#5B34EA] p-2 text-white pt-12 pb-10 w-full">
      <div className="lg:block hidden">
        <FooterOnDesktopView />
      </div>
      <div className="lg:hidden block">
        <FooterOnMobileView />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
