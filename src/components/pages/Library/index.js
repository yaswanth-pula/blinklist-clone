import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
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
  content: {
    display: "grid",
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    columnGap: "1em",
    rowGap: "2em",
  },
});

const Library = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text content="My Library" variant="text_header" />
      </div>
      <LibraryTabs />
      <BooksList />

      {/* <div className={styles.content}>
        <BookCard bookInfo={book} />
        <BookCard bookInfo={book} />
        <BookCard bookInfo={book} />
        <BookCard bookInfo={book} />
        <BookCard bookInfo={book} />
      </div> */}
      {/* <Grid container spacing={3}>
        <Grid item sm={6} md={4} xs={12}>
          <BookCard bookInfo={book} />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <BookCard bookInfo={book} />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <BookCard bookInfo={book} />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <BookCard bookInfo={book} />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <BookCard bookInfo={book} />
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Library;
