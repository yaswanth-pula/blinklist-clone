import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../atoms/Text";
import BooksList from "../../Templates/BooksList";

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
  const [books, setBooks] = useState([]);
  const [parentRender, setParentRender] = useState("");

  const requestServer = (query) => {
    if (query.trim() === "") {
      setBooks([]);
      return;
    }
    query = escape("^" + query);
    let url = `http://localhost:3000/books?title_like=${query}`;
    setBooks([]);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    requestServer(query.trim());
  }, [query, parentRender]);

  const handleExploreUpdate = (value) => {
    setParentRender(value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="Search Results" variant="text_header" />
      </div>
      {query.trim() !== "" && books.length === 0 ? (
        <h1>No Results Found.Please Try Different Search term</h1>
      ) : (
        <BooksList
          booksList={books}
          variant="explore"
          parentUpdate={handleExploreUpdate}
        />
      )}
    </div>
  );
};

export default SearchResult;
