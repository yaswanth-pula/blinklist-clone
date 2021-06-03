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

const getReadingBookList = () => {
  const book = {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  };
  return [book];
};

const getFinshedBookList = () => {
  const finshedBook1 = {
    title: "Clockwork",
    author: "Mike Michalwicz",
    readTime: "13",
    readersCount: "3.1k",
    url:
      "https://images.blinkist.com/images/books/6038ca5c6cee07000751a788/1_1/250.jpg",
  };
  const finshedBook2 = {
    title: "Beyond Entrepreneurship",
    author: "Jim Colins and Bill Lazier",
    readTime: "17",
    readersCount: "1.8k",
    url:
      "https://images.blinkist.com/images/books/608bc8bb6cee070008a8f57e/1_1/250.jpg",
  };
  return [finshedBook1, finshedBook2];
};

const Library = () => {
  const styles = useStyles();

  const [libraryBookList, setLibraryBookList] = useState([]);
  useEffect(() => {
    setLibraryBookList(getReadingBookList());
  }, []);

  const renderTabBookList = (tabId) => {
    tabId
      ? setLibraryBookList(getFinshedBookList())
      : setLibraryBookList(getReadingBookList());
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="My Library" variant="text_header" />
      </div>
      <LibraryTabs informParent={renderTabBookList} />
      <BooksList booksList={libraryBookList} />
    </div>
  );
};

export default Library;
