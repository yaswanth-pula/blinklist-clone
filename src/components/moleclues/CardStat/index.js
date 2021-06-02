import React from "react";
import Text from "../../atoms/Text";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    alignItems: "flex-end",
    marginTop: "1em",
    marginLeft: "0.25em",
  },
  text_marigin: {
    marginLeft: "0.25em",
  },
  icon: {
    "& > svg": {
      fill: "#3a4649",
      fontSize: "1rem",
    },
  },
});
const CardStat = (props) => {
  const styles = useStyles();
  const { textContent, icon } = props;
  return (
    <div className={styles.root}>
      <span className={styles.icon}>{icon}</span>
      <Text
        content={textContent}
        customClass={styles.text_marigin}
        variant={"text_card_stat"}
      />
    </div>
  );
};

export default CardStat;
