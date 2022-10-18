import React from "react";

function DropdownItem({
  item = {},
  menuItemClassName = "",
  onItemClick = (event, clickedItem = "") => {},
  setOpen = () => {},
}) {
  const closeDropdown = () => {
    setOpen(false);
  };

  const onDropdownItemClick = (e, item) => {
    onItemClick(e, item);
    closeDropdown();
  };

  return (
    <div
      onClick={(e) => (onDropdownItemClick(e, item))}
      className={`${menuItemClassName} flex items-center justify-between p-1 hover:text-[#5B34EA]`}
    >
      <div className="pr-2.5">{item.icon}</div>
      <p>{item.text}</p>
    </div>
  );
}

export default React.memo(DropdownItem);
