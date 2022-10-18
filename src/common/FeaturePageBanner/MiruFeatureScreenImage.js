import React from "react";

function MiruFeatureScreenImage({ featureScreenImage = "" }) {
  return (
    <div className="md:basis-9/12">
      <img
        src={featureScreenImage}
        alt=""
        loading="eager"
        decoding="async"
        className="w-full object-contain miru-image-box-shadow rounded-lg"
      />
    </div>
  );
}

export default MiruFeatureScreenImage;
