import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import InputField from "../../atoms/InputField";
import CloseIcon from "@material-ui/icons/Close";
import AppLogo from "../../moleclues/AppLogo";
import SearchIcon from "@material-ui/icons/Search";
import AppIconButton from "../../moleclues/AppIconButton";

const useStyles = makeStyles({
  searchBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0.5em 0",
  },
  searchInput: {
    border: "none",
    borderRadius: "0px",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#042330",
    "&:focus": {
      border: "none",
    },
  },
  fieldContainer: {
    display: "flex",
    width: "80%",
    flex: 1,
    justifyContent: "flex-start",
    borderBottom: "2px solid #bac8ce",
  },
  searchButton: {
    color: "#0365f2",
    marginLeft: "0.125em",
  },
});
const SearchBar = ({ searchUpdate }) => {
  const styles = useStyles();

  const handleSearchClose = () => {
    searchUpdate("Close");
  };

  return (
    <div className={styles.searchBar}>
      <AppLogo />
      <AppIconButton
        children={<SearchIcon fontSize="large" />}
        customClass={styles.searchButton}
      />
      <div className={styles.fieldContainer}>
        <InputField
          type="text"
          customClass={styles.searchInput}
          placeholder="Search for titles and authors"
        />
        <AppIconButton
          children={<CloseIcon />}
          clickHandler={handleSearchClose}
        />
      </div>
    </div>
  );
};

export default SearchBar;
