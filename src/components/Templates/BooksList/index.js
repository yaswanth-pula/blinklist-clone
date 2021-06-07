import React from "react";
import BookCard from "../../organisms/BookCard";
import Grid from "@material-ui/core/Grid";

const BooksList = ({ booksList, parentUpdate, variant }) => {
  return (
    <Grid container spacing={3}>
      {booksList.map((book) => (
        <BookCard
          key={book.id}
          bookInfo={book}
          variant={variant}
          parentUpdate={parentUpdate}
        />
      ))}
    </Grid>
  );
};

export default BooksList;