import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../atoms/Text";
import BooksList from "../../organisms/BooksList";
import LibraryTabs from "../../organisms/LibraryTabs";

const useStyles = makeStyles({
  root: {
    marginLeft: "1em",
    marginRight: "1em",
  },
  header: {
    padding: "3.125rem 0 2.5rem",
  },
});

const Explore = () => {
  const styles = useStyles();
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const requestServer = () => {
    let url = `http://localhost:3000/books`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    requestServer();
  }, []);
  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <Text content="Explore" variant="text_header" />
        </div>
        {isFetching ? (
          <h1>Loading....</h1>
        ) : (
          <BooksList booksList={books} variant="explore" />
        )}
      </div>
    </>
  );
};

export default Explore;
