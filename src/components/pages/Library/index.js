import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../atoms/Text";
import BooksList from "../../Templates/BooksList";
import LibraryTabs from "../../organisms/LibraryTabs";
import {
  API_ENDPOINT_URL,
  BOOK_STATUS_READING,
  BOOK_STATUS_FINISHED,
} from "../../../utils/config";

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
    let url = `${API_ENDPOINT_URL}?status=${param}`;

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
    tabId
      ? requestServer(BOOK_STATUS_FINISHED)
      : requestServer(BOOK_STATUS_READING);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="My Library" variant="textHeader" />
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
