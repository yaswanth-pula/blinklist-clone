import React from "react";
import Text from "../../atoms/Text";
import InputField from "../../atoms/InputField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form_input: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    margin: "1.5em 1em",
  },
});

const FormInputField = (props) => {
  const { label, value, changeHandler } = props;
  const styles = useStyles();

  return (
    <div className={styles.form_input}>
      <Text content={label} variant="text_input_label" />
      <InputField />
    </div>
  );
};

export default FormInputField;
