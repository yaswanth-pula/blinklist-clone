import React from "react";
import BookCard from "../../organisms/BookCard";
import Grid from "@material-ui/core/Grid";

const BooksList = (props) => {
  const { booksList } = props;
  return (
    <Grid container spacing={3}>
      {booksList.map((book) => (
        <BookCard key={book.title} bookInfo={book} />
      ))}
    </Grid>
  );
};

export default BooksList;
