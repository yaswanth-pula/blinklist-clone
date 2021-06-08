import React from "react";
import BookCard from "../../organisms/BookCard";
import Grid from "@material-ui/core/Grid";

const BooksList = ({ booksList, ...args }) => {
  return (
    <Grid container spacing={3}>
      {booksList.map((book) => (
        <BookCard key={book.id} bookInfo={book} {...args} />
      ))}
    </Grid>
  );
};

export default BooksList;
