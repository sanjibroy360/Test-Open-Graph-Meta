import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "constants/routes";
import Dropdown from "common/Dropdown/Loadable";
import { NAVBAR_ITEMS, TEMPORARILY_HIDE } from "./constants";

function NavLinks() {
  const navigate = useNavigate();

  const onItemClick = (e, dropdownMenuItemDetails = {}) => {
    e.stopPropagation();
    navigate(dropdownMenuItemDetails?.redirectTo || PATH.HOME);
  };

  const isTemporarilyHidingNavItem = (itemName = "") => {
    return TEMPORARILY_HIDE.includes(itemName.toUpperCase());
  };

  return (
    <ul className="flex md:flex-row sm:flex-col lg:gap-x-14 md:gap-x-10 gap-x-4 basis-3/5 items-center md:justify-start justify-center w-full">
      {NAVBAR_ITEMS.map((item) => (
        <li
          key={item.name}
          className={`font-manrope font-bold lg:text-base text-sm text-[#4A485A] hover:text-[#5B34EA] whitespace-nowrap ${
            isTemporarilyHidingNavItem(item.name) ? "md:block hidden" : ""
          }`}
        >
          {!isTemporarilyHidingNavItem(item.name) && (
            <>
              {item?.type?.toLowerCase() === "link" ? (
                <a href={item.redirectTo}>{item.name}</a>
              ) : (
                <Dropdown
                  text={item.name}
                  menuItems={item.menuItems}
                  onItemClick={onItemClick}
                  menuItemClassName="font-manrope text-sm text-[#1D1A31] not-italic font-medium"
                />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default React.memo(NavLinks);
