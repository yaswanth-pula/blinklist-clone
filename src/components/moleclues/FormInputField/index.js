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

const FormInputField = ({ label, isError, errorText, ...args }) => {
  const styles = useStyles();

  return (
    <div className={styles.form_input}>
      <Text content={label} variant="text_input_label" />
      <InputField {...args} />
      {isError && <Text content={errorText} variant="text_input_error" />}
    </div>
  );
};

export default FormInputField;
