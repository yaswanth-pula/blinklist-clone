import React from "react";
import BookCard from "../../organisms/BookCard";
import Grid from "@material-ui/core/Grid";

const BooksList = (props) => {
  const book = {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  };
  const booksList = [book, book, book, book];
  return (
    <Grid container spacing={3}>
      {booksList.map((book) => (
        <BookCard key={book.title} bookInfo={book} />
      ))}
    </Grid>
  );
};

export default BooksList;
