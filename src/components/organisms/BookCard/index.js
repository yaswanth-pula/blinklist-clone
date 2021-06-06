import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Text from "../../atoms/Text";
import CardStat from "../../moleclues/CardStat";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Link from "../../atoms/Link";
import PropTypes from "prop-types";
import {
  BOOK_STATUS_FINISHED,
  BOOK_STATUS_FRESH,
  BOOK_STATUS_READING,
} from "../../../utils/constant";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  card_image: {
    "& img": {
      width: "100%",
      maxWidth: "250px",
      maxHeight: "250px",
    },
  },
  stat: {
    display: "flex",
    justifyContent: "space-between",
  },
  options: {
    justifyContent: "space-between",
    "& svg": {
      fill: "#042330",
    },
  },
  text_margin: {
    marginBottom: "0.5rem",
  },
});

const BookCard = (props) => {
  const styles = useStyles();
  const { bookInfo, variant, parentUpdate } = props;
  const currentBookId = bookInfo.id;
  const currentBookStatus = bookInfo.status;

  const updateBookStatus = (bookId, updatedStatus) => {
    const url = `http://localhost:3000/books/${bookId}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: updatedStatus }),
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleUpdate = () => {
    let updatedStatus =
      currentBookStatus === BOOK_STATUS_READING
        ? BOOK_STATUS_FINISHED
        : BOOK_STATUS_READING;

    updateBookStatus(currentBookId, updatedStatus);

    switch (currentBookStatus) {
      case BOOK_STATUS_READING:
        parentUpdate(0);
        break;
      case BOOK_STATUS_FINISHED:
        parentUpdate(1);
        break;
      case BOOK_STATUS_FRESH:
        parentUpdate(Date.now());
        break;
    }
  };

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card className={styles.root} variant="outlined">
        <CardMedia
          component="img"
          className={styles.card_image}
          src={bookInfo.url}
          alt="sampleBook"
        />
        <CardContent>
          <Text
            content={bookInfo.title}
            variant="text_card_title"
            customClass={styles.text_margin}
          />
          <Text
            content={bookInfo.author}
            variant="text_card_author"
            customClass={styles.text_margin}
          />
          <div className={styles.stat}>
            <CardStat
              textContent={`${bookInfo.readTime}-minute read`}
              icon={<AccessTimeIcon />}
            />
            {/* <CardStat
              textContent={`${bookInfo.readersCount} reads`}
              icon={<PersonOutlineIcon />}
            /> */}
          </div>
        </CardContent>
        {variant === "library" && (
          <CardActions className={styles.options}>
            {bookInfo.status === BOOK_STATUS_READING ? (
              <Link
                text="Mark as done"
                variant="libraryCardButton"
                clickHandler={handleUpdate}
              />
            ) : (
              <Link
                text="Read Again"
                variant="libraryCardButton"
                clickHandler={handleUpdate}
              />
            )}
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </CardActions>
        )}
        {variant === "explore" && bookInfo.status === BOOK_STATUS_FRESH && (
          <Link
            text="+ Add to Library"
            variant="exploreCardButton"
            clickHandler={handleUpdate}
          />
        )}
      </Card>
    </Grid>
  );
};

BookCard.propTypes = {
  bookInfo: PropTypes.object,
  variant: PropTypes.oneOf(["library", "explore"]),
};

export default BookCard;
