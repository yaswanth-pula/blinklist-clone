import React, { useEffect, useState } from "react";
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

const Explore = ({ selectedCategory }) => {
  const styles = useStyles();
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [parentRender, setParentRender] = useState("");

  const requestServer = (selectedCategory) => {
    selectedCategory = escape(selectedCategory);
    let url = `http://localhost:3000/books?category_like=${selectedCategory}`;
    setIsFetching(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    requestServer(selectedCategory);
  }, [parentRender, selectedCategory]);

  const handleExploreUpdate = (value) => {
    setParentRender(value);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <Text
            content={selectedCategory === "" ? "All" : selectedCategory}
            variant="text_header"
          />
        </div>
        {isFetching ? (
          <h1>Loading....</h1>
        ) : (
          <BooksList
            booksList={books}
            variant="explore"
            parentUpdate={handleExploreUpdate}
          />
        )}
      </div>
    </>
  );
};

export default Explore;
