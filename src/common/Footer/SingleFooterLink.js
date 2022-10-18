import React from "react";
import { useNavigate } from "react-router-dom";
import { USE_CASES_SECTION_HEADER } from "./constants";

function SingleFooterLink({ text = "", redirectTo = "#", sectionHeader = "" }) {
  const navigate = useNavigate();

  const handleRedirection = () => {
    if (sectionHeader === USE_CASES_SECTION_HEADER) {
      navigate(redirectTo);
    }
  };
  return (
    <p
      className="font-manrope not-italic text-sm text-white font-normal capitalize pb-4 hover:text-slate-300 w-[80%]"
      onClick={handleRedirection}
    >
      <a href={redirectTo}>{text}</a>
    </p>
  );
}

export default React.memo(SingleFooterLink);
