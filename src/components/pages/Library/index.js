import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../atoms/Text";
import BooksList from "../../Templates/BooksList";
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

const Library = () => {
  const styles = useStyles();

  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const requestServer = (param) => {
    let url = `http://localhost:3000/books?status=${param}`;

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
    requestServer("reading");
  }, []);

  const renderTabBookList = (tabId) => {
    tabId ? requestServer("finished") : requestServer("reading");
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="My Library" variant="text_header" />
      </div>
      <LibraryTabs informParent={renderTabBookList} />
      {isFetching ? (
        <h1>Loading....</h1>
      ) : (
        <BooksList
          booksList={books}
          variant="library"
          parentUpdate={renderTabBookList}
        />
      )}
    </div>
  );
};

export default Library;
