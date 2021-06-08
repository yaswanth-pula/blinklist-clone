import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../atoms/Text";
import BooksList from "../../Templates/BooksList";
import { API_ENDPOINT_URL } from "../../../utils/config";

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
  const [isFetching, setIsFetching] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [parentRender, setParentRender] = useState("");

  const requestServer = () => {
    let url = API_ENDPOINT_URL;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        setIsFetching(false);
      })
      .catch((error) => {
        setIsFetching(false);
        console.log(error);
      });
  };

  const filterBooks = (query) => {
    query = query.toLowerCase();
    let filterBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(filterBooks);
  };

  useEffect(() => {
    requestServer();
  }, [parentRender]);

  useEffect(() => {
    if (!isFetching) filterBooks(query);
  }, [query, isFetching, parentRender]);

  const handleExploreUpdate = (value) => {
    setParentRender(value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="Search Results" variant="text_header" />
      </div>
      {filteredBooks.length === 0 ? (
        <Text
          variant="text_card_title"
          content="No Results Found. Please Try Different Search term"
        />
      ) : (
        <BooksList
          booksList={filteredBooks}
          variant="explore"
          parentUpdate={handleExploreUpdate}
        />
      )}
    </div>
  );
};

export default SearchResult;
