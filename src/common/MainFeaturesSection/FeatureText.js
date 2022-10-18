import React from "react";
import GetStartedButton from "common/GetStartedButton/Loadable";
import { BUTTON_TYPE } from "./constants";
import { useNavigate } from "react-router-dom";

function FeatureText({
  texts = {},
  icon = "",
  buttonText = "",
  buttonType = BUTTON_TYPE.LEARN_MORE,
  onLearnMoreBtnClickRedirectTo = "#",
}) {
  const navigate = useNavigate();

  const handleLearnMoreBtnClick = (event, redirectTo = "#") => {
    event.stopPropagation();
    navigate(redirectTo);
    window.scrollTo(0, 0);
  };

  return (
    <div className="md:basis-[42%] flex flex-col justify-around">
      {icon ? (
        <div className="w-10 md:mx-0 mx-auto">
          <img
            src={icon}
            loading="lazy"
            decoding="async"
            alt="Icon"
            className="w-full object-contain"
          />
        </div>
      ) : null}
      <h2 className="text-gradient py-6 lg:text-4xl text-2xl font-extrabold not-italic lg:tracking-[-1px] tracking-[-1px]">
        {texts.title}
      </h2>
      <p className="font-manrope pb-8 text-[#777683] lg:text-base text-base not-italic font-normal">
        {texts.description}
      </p>
      <div>
        {buttonType === BUTTON_TYPE.GET_STARTED ? (
          <div className="mb-20">
            <GetStartedButton />
          </div>
        ) : (
          <button
            className="font-manrope not-italic font-bold lg:text-base text-sm  text-[#5B34EA] hover:text-[#7c5dee]"
            onClick={(e) =>
              handleLearnMoreBtnClick(e, onLearnMoreBtnClickRedirectTo)
            }
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default React.memo(FeatureText);
