import React from "react";

function LinkSetHeader({ text = "" }) {
  return (
    <p className="pb-6 font-manrope text-xl not-italic text-white capitalize font-semibold">
      {text}
    </p>
  );
}

export default React.memo(LinkSetHeader);
