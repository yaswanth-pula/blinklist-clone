import { IconButton } from "@material-ui/core";
import React from "react";

const AppIconButton = ({ children, customClass, clickHandler }) => {
  return (
    <IconButton
      className={customClass}
      onClick={clickHandler ? () => clickHandler() : null}
    >
      {children}
    </IconButton>
  );
};

export default AppIconButton;
