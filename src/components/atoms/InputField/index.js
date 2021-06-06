import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  field: {
    width: "100%",
    minWidth: "0",
    padding: ".625rem .875rem",
    color: "#3a4649",
    fontWeight: "500",
    fontSize: "1rem",
    fontFamily: "inherit",
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
  const { id, type, value, changeHandler, placeholder } = props;
  const styles = useStyles();
  return (
    <div className={styles.fieldContainer}>
      <input
        id={id}
        type={type}
        className={styles.field}
        value={value}
        onChange={(event) => changeHandler(event)}
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
