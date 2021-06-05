import { makeStyles } from "@material-ui/core";
import Link from "../../atoms/Link";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import AppLogo from "../../moleclues/AppLogo";
import React from "react";
import AddBook from "../AddBook";
import ExploreMenu from "../ExploreMenu";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    marginTop: "1em",
    marginBottom: "1em",
    padding: "0.5em",
    width: "100%",
    overflow: "hide",
    alignContent: "center",
  },
  navLogo: {
    display: "flex",
    justifyContent: "flex-start",
  },
  mainLinks: {
    display: "flex",
    flex: 2,
    justifyContent: "space-evenly",
  },
  accountLink: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
});
const NavBar = ({ parentUpdate }) => {
  const styles = useStyles();
  const handleNavClick = (event, child) => {
    console.log(child);
    parentUpdate(child);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <AppLogo />
      </div>
      <div className={styles.mainLinks}>
        <ExploreMenu clickHandler={handleNavClick} />
        <Link
          text="My Library"
          variant="navLink"
          clickHandler={handleNavClick}
        />
        <AddBook />
      </div>
      <div className={styles.accountLink}>
        <Link
          text="Account"
          variant="navLink"
          endIcon={<KeyboardArrowDownRoundedIcon />}
          // clickHandler={handleLog}
        />
      </div>
    </div>
  );
};

export default NavBar;
