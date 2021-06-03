import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles({
  text: {
    display: "block",
    color: "#03314b",
  },
  text_header: {
    fontSize: "2.25rem",
    lineHeight: "2.8125rem",
    fontWeight: "bolder",
  },
  text_card_title: {
    fontSize: "1.125rem",
    fontWeight: "700",
    lineHeight: "1.33",
    overflow: "hidden",
  },
  text_card_author: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5",
    color: "#6d787e",
  },
  text_card_stat: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.57",
    color: "#3a4649",
  },
  text_input_label: {
    fontSize: "1.125rem",
    fontWeight: "700",
    lineHeight: "1.33",
    color: "#6d787e",
    display: "block",
    marginBottom: ".5rem",
  },
  text_form_header: {
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "1.33",
    color: "#03314b",
    marginBottom: "1.5rem",
  },
});

const Text = (props) => {
  const styles = useStyles();
  const { content, variant, customClass } = props;
  const variantStyle = styles[variant];
  return (
    <span
      className={[`${styles.text}`, `${variantStyle}`, `${customClass}`].join(
        " "
      )}
    >
      {content}
    </span>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.string,
  customClass: PropTypes.string,
};
Text.defaultProps = {
  content: "Empty String",
  variant: "",
  customClass: null,
};

export default Text;
