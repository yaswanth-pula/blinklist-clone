import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  field: {
    width: "100%",
    minWidth: "0",
    padding: ".625rem .875rem",
    color: "#3a4649",
    fontWeight: "500",
    fontSize: "1rem",
    fontFamily: "CeraPRO",
    lineHeight: "1.25",
    background: "none",
    border: "2px solid #bac8ce",
    borderRadius: "0.25rem",
    outline: "0",
    "&:focus  ": {
      borderColor: " #2ce080",
    },
  },
  fieldContainer: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
  },
});

const InputField = (props) => {
  const { type, value } = props;
  const styles = useStyles();
  return (
    <div className={styles.fieldContainer}>
      <input type="text" className={styles.field} />
    </div>
  );
};

export default InputField;
