import React from "react";
import { makeStyles } from "@material-ui/core";
import Text from "../../atoms/Text";

const useStyles = makeStyles({
  form_input: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    margin: "1.5em 1em",
  },
  select: {
    fontFamily: ` "CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
    fontWeight: 400,
    fontSize: "1rem",
    width: "100%",
    padding: ".625rem .875rem",
    background: "inherit",
    border: "2px solid #bac8ce",
    borderRadius: "4px",
    outline: "none",
    "&:focus": {
      borderColor: "#2ce080",
    },
  },
  option: {
    fontWeight: 400,
  },
});

const SelectField = ({
  id,
  value,
  changeHandler,
  options,
  isError,
  errorText,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.form_input}>
      <select
        id={id}
        className={styles.select}
        value={value}
        onChange={changeHandler}
      >
        <option disabled value="">
          Category
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option} className={styles.option}>
              {option}
            </option>
          );
        })}
      </select>
      {isError && <Text content={errorText} variant="text_input_error" />}
    </div>
  );
};

export default SelectField;
