import React, { Fragment, useEffect, useRef, useState } from "react";
import { MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import DropdownItem from "./DropdownItem";
import DropdownButton from "./DropdownButton";

function Dropdown({
  text = "",
  menuItems = [],
  onItemClick = (event, clickedItem = "") => {},
  menuItemClassName = "",
  menuBtnClassName = "",
}) {
  const dropDownBtnRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Fragment>
      <div
        ref={dropDownBtnRef}
        onMouseEnter={() => setOpen(true)}
        className="flex hover:text-[#5B34EA] items-center"
      >
        <DropdownButton
          btnText={text}
          isOpen={isOpen}
          setOpen={setOpen}
          menuBtnClassName={menuBtnClassName}
        />
      </div>
      <ControlledMenu
        state={isOpen ? "open" : "closed"}
        anchorRef={dropDownBtnRef}
        onMouseLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        {menuItems?.length > 0
          ? menuItems.map((item) => (
              <MenuItem key={item.text} className="hover:bg-[#F5F7F9] rounded">
                {item?.text?.trim() ? (
                  <DropdownItem
                    item={item}
                    menuItemClassName={menuItemClassName}
                    onItemClick={onItemClick}
                    setOpen={setOpen}
                  />
                ) : null}
              </MenuItem>
            ))
          : null}
      </ControlledMenu>
    </Fragment>
  );
}

export default React.memo(Dropdown);
