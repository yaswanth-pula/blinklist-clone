import { IconButton, makeStyles } from "@material-ui/core";
import Link from "../../atoms/Link";

import AppLogo from "../../moleclues/AppLogo";
import React from "react";
import AddBook from "../AddBook";
import ExploreMenu from "../ExploreMenu";
import Account from "../Account";
import { useAuth0 } from "@auth0/auth0-react";
import SearchIcon from "@material-ui/icons/Search";
import AppIconButton from "../../moleclues/AppIconButton";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    padding: "0.5em",
    width: "100%",
    alignContent: "center",
  },
  navLogo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainLinks: {
    display: "flex",
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "",
  },
  accountLink: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  searchButton: {
    marginLeft: "0.5em",
    fill: "#03314b",
    "& :hover": {
      color: "#0365f2",
    },
  },
});
const NavBar = ({ parentUpdate, searchUpdate }) => {
  const styles = useStyles();
  const { isAuthenticated } = useAuth0();
  const handleNavClick = (event, child) => {
    console.log(child);
    parentUpdate(child);
  };
  const handleSearchClick = () => {
    searchUpdate("Search");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <AppLogo />
        <AppIconButton
          children={<SearchIcon fontSize="large" />}
          customClass={styles.searchButton}
          clickHandler={handleSearchClick}
        />
      </div>
      <div className={styles.mainLinks}>
        <ExploreMenu clickHandler={handleNavClick} />
        <Link
          text="My Library"
          variant="navLink"
          clickHandler={handleNavClick}
        />
        {isAuthenticated && <AddBook />}
      </div>
      <div className={styles.accountLink}>
        <Account />
      </div>
    </div>
  );
};

export default NavBar;
