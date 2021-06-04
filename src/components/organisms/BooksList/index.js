import React from "react";
import BookCard from "../../organisms/BookCard";
import Grid from "@material-ui/core/Grid";

const BooksList = (props) => {
  const { booksList, parentUpdate, variant } = props;
  return (
    <Grid container spacing={3}>
      {booksList.map((book) => (
        <BookCard
          key={book.title}
          bookInfo={book}
          variant={variant}
          parentUpdate={parentUpdate}
        />
      ))}
    </Grid>
  );
};

export default BooksList;
