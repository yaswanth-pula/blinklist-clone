import IconButton from "@material-ui/core/IconButton";
import React from "react";

const AppIconButton = ({ children, customClass, clickHandler }) => {
  return (
    <IconButton
      className={customClass}
      onClick={clickHandler ? (event) => clickHandler(event) : null}
    >
      {children}
    </IconButton>
  );
};

export default AppIconButton;
