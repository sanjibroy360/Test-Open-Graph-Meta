import React from "react";
import DashboardImageOnHeroSection from "assets/hero-section-image.svg";

function HeroDashboardImage() {
  return (
    <div className="lg:absolute right-0 lg:pb-0 pb-8">
      <img
        alt="Dashboard"
        src={DashboardImageOnHeroSection}
        loading="eager"
        decoding="async"
        className="lg:w-[40rem] rounded-l-lg miru-image-box-shadow object-contain"
      />
    </div>
  );
}

export default HeroDashboardImage;
