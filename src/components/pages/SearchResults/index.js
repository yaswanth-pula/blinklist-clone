import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "1em",
    marginRight: "1em",
  },
  header: {
    padding: "3.125rem 0 2.5rem",
  },
});

const SearchResult = ({ query }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="Search Results" variant="text_header" />
      </div>
      {
        <BooksList
          booksList={books}
          variant="explore"
          parentUpdate={handleExploreUpdate}
        />
      }
    </div>
  );
};

export default SearchResult;
