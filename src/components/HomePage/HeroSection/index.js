import React from "react";
import HeroDashboardImage from "./HeroDashboardImage";
import HeroTexts from "./HeroTexts";

function HeroSection() {
  return (
    <section>
      <div className="md:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between">
        <HeroTexts />
        <HeroDashboardImage />
      </div>
    </section>
  );
}

export default React.memo(HeroSection);
