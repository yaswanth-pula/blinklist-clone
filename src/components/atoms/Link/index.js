import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles({
  link: {
    display: "inline-flex",
    alignItems: "center",
    color: "#03314b",
    fontSize: "1rem",
    textDecoration: "none",
    fontWeight: 500,
    lineHeight: "1",
    marginBottom: "0.5em",
    borderBottom: "0.125em solid #fff",
    "&:hover": {
      borderBottomColor: "#2ce080",
    },
  },
});
const Link = (props) => {
  const { href, text, endIcon, clickHandler = null } = props;
  const styles = useStyles();
  return (
    <a
      href={href}
      className={styles.link}
      onClick={clickHandler ? () => clickHandler() : null}
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
  clickHandler: PropTypes.func,
};

Link.defaultProps = {
  href: "#",
  endIcon: null,
  clickHandler: null,
};

export default Link;
