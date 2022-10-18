import React from "react";

function UseCaseHeroImage({ sectionHeroImage = "" }) {
  return (
    <div className="md:basis-1/2">
      <img
        src={sectionHeroImage}
        alt=""
        loading="eager"
        decoding="async"
        className="w-full object-contain miru-image-box-shadow rounded-lg"
      />
    </div>
  );
}

export default UseCaseHeroImage;
