import React from "react";
import { CaretDown, CaretUp } from "phosphor-react";

function DropdownButton({
  isOpen = false,
  menuBtnClassName = "",
  btnText = "",
}) {
  return (
    <>
      <p
        className={`pr-2 cursor-pointer whitespace-nowrap ${
          isOpen ? "text-[#5B34EA]" : ""
        } ${menuBtnClassName}`}
      >
        {btnText || "Dropdown"}
      </p>
      <div className="cursor-pointer">
        {isOpen ? (
          <CaretUp weight="bold" color="#5B34EA" size={14} />
        ) : (
          <CaretDown weight="bold" size={14} />
        )}
      </div>
    </>
  );
}

export default React.memo(DropdownButton);
