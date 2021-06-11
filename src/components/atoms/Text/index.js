import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles({
  text: {
    display: "block",
    color: "#03314b",
    fontFamily: ` "CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
  },
  textHeader: {
    fontSize: "2.25rem",
    lineHeight: "2.8125rem",
    fontWeight: "bolder",
  },
  textCardTitle: {
    fontSize: "1.125rem",
    fontWeight: "700",
    lineHeight: "1.33",
    whiteSpace: "nowrap",
    boxSizing: "inherit",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  textCardAuthor: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5",
    color: "#6d787e",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  textCardStat: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.57",
    color: "#3a4649",
  },
  textInputLabel: {
    fontSize: "1.125rem",
    fontFamily: "inherit",
    fontWeight: "700",
    lineHeight: "1.33",
    color: "#6d787e",
    display: "block",
    marginBottom: ".5rem",
  },
  textInputError: {
    color: "#ff445d",
    marginTop: ".25em",
  },
  textFormHeader: {
    fontFamily: "inherit",
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "1.33",
    color: "#03314b",
    marginLeft: ".5em",
  },
});

const Text = ({ content, variant, customClass }) => {
  const styles = useStyles();
  const variantStyle = styles[variant];
  return (
    <Typography
      className={[`${styles.text}`, `${variantStyle}`, `${customClass}`].join(
        " "
      )}
    >
      {content}
    </Typography>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.string,
  customClass: PropTypes.string,
};

export default Text;
