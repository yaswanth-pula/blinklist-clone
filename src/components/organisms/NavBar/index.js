import { makeStyles } from "@material-ui/core";
import Link from "../../atoms/Link";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import AppLogo from "../../moleclues/AppLogo";
import React from "react";
import AddBook from "../AddBook";

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
const NavBar = () => {
  const styles = useStyles();
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <AppLogo />
      </div>
      <div className={styles.mainLinks}>
        <Link
          href="#"
          text="Explore"
          endIcon={<KeyboardArrowDownRoundedIcon />}
          variant="navLink"
        />
        <Link href="#" text="My Library" variant="navLink" />
        {/* <Link href="https://www.google.com" text="Add Book" variant="navLink" /> */}
        <AddBook />
      </div>
      <div className={styles.accountLink}>
        <Link
          href="#"
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
