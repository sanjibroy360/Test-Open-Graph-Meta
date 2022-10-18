import React from "react";
import { useNavigate } from "react-router-dom";
import MiruBlueLogoWithText from "assets/miru-blue-logo-with-text.svg";
import MiruWhiteLogoWithText from "assets/miru-white-logo-with-text.svg";
import { PATH } from "constants/routes";

function MiruLogoWithText({ isBlueLogoText = false, className = "" }) {
  const navigate = useNavigate();
  const redirectToHomePage = (event) => {
    event.stopPropagation();
    navigate(PATH.HOME);
  };

  return (
    <div className="basis-1/6 cursor-pointer" onClick={redirectToHomePage}>
      {isBlueLogoText ? (
        <img
          src={MiruBlueLogoWithText}
          alt="Miru Logo"
          loading="eager"
          decoding="async"
          className={`object-contain bg-cover ${className}`}
        />
      ) : (
        <img
          src={MiruWhiteLogoWithText}
          alt="Miru Logo"
          loading="eager"
          decoding="async"
          className={`object-contain bg-cover ${className}`}
        />
      )}
    </div>
  );
}

export default React.memo(MiruLogoWithText);
