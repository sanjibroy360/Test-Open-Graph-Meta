import React from "react";

function MiruScreenImage({ image }) {
  return (
    <div className="md:basis-9/12">
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full object-contain miru-image-box-shadow rounded-lg"
      />
    </div>
  );
}

export default React.memo(MiruScreenImage);
