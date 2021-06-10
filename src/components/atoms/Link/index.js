import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1,
    cursor: "pointer",
  },
  navLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#03314b",
    marginBottom: "0.5em",
    borderBottom: "0.125em solid #fff",
    "&:hover": {
      borderBottomColor: "#2ce080",
    },
  },
  exploreCardButton: {
    display: "flex",
    justifyContent: "center",
    color: "#0365F2",
    padding: "1rem 0",
    borderTop: "1px solid #BAC8CE",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
      background: "#0365F2",
    },
  },
  libraryCardButton: {
    color: "#0365F2",
    padding: "0.1875em 0.5625em",
    border: "1px solid #0365F2",
    borderRadius: "0.25em",
    lineHeight: "1.75",
    "&:hover": {
      color: "#fff",
      background: "#0365F2",
      cursor: "pointer",
    },
  },
  exploreCategoryText: {
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    "&:hover": {
      color: "#0365f2",
    },
  },
});
const Link = ({ href, text, endIcon, clickHandler, variant, customClass }) => {
  const styles = useStyles();
  const variantStyle = styles[variant];
  return (
    <a
      href={href}
      className={[`${styles.root}`, `${variantStyle}`, customClass].join(" ")}
      onClick={clickHandler ? (event) => clickHandler(event, text) : null}
    >
      {text}
      <span>{endIcon}</span>
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  endIcon: PropTypes.element,
  variant: PropTypes.string,
};

export default Link;
