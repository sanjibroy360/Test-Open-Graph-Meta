import React from "react";

function HeroImage({ image = "" }) {
  return (
    <div className="lg:absolute lg:right-0 lg:top-0">
      <img
        src={image}
        loading="eager"
        className="lg:w-[32.5rem] object-contain"
        decoding="async"
        alt=""
      />
    </div>
  );
}

export default React.memo(HeroImage);
