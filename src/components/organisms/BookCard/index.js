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

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  card_image: {
    "& img": {
      width: "100%",
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
  const { bookInfo, variant } = props;
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
            <CardStat
              textContent={`${bookInfo.readersCount} reads`}
              icon={<PersonOutlineIcon />}
            />
          </div>
        </CardContent>
        {variant === "library" && (
          <CardActions className={styles.options}>
            {bookInfo.status === "reading" ? (
              <Link text="Mark as done" variant="libraryCardButton" />
            ) : (
              <Link text="Read Again" variant="libraryCardButton" />
            )}
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </CardActions>
        )}
        {variant === "explore" && (
          <Link text="+ Add to Library" variant="exploreCardButton" />
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
