import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import Text from "../../atoms/Text";
import Link from "../../atoms/Link";
import Container from "@material-ui/core/Container";
import { Divider, Grid, makeStyles } from "@material-ui/core";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";

const useStyles = makeStyles({
  menu: {
    backgroundColor: "#f1f6f4",
    height: "auto",
    width: "100%",
    padding: "2.0em 0 2.5em 0",
    marginTop: "1.5em",
  },
  item: {
    display: "block",
    padding: "1rem",
    color: "#03314b",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5",
    color: "#0365f2",
    marginBottom: "1.5em",
  },
  exploreBorder: {
    borderBottomColor: "#2ce080",
  },
});

const ExploreMenu = ({ clickHandler }) => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCategoriesClick = (event, selectedCategory) => {
    handleClose();
    clickHandler(event, selectedCategory);
  };
  const categories = [
    "Entrepreneurship",
    "Marketing & Sales",
    "Health & Nutrition",
    "Economics",
    "Politics",
    "Science",
    "Personal Devlopment",
    "History",
    "Psychology",
  ];
  return (
    <>
      <Link
        text="Explore"
        endIcon={
          anchorEl ? (
            <KeyboardArrowUpRoundedIcon />
          ) : (
            <KeyboardArrowDownRoundedIcon />
          )
        }
        variant="navLink"
        customClass={anchorEl && styles.exploreBorder}
        clickHandler={handleClick}
      />
      <Menu
        elevation={5}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#f1f6f4",
            height: "auto",
            width: "100%",
            padding: "2.0em 0 2.5em 0",
            marginTop: "1.5em",
          },
        }}
      >
        <Container maxWidth="md">
          <Text content="Explore by category" customClass={styles.header} />
          <Divider />
          <Grid container>
            {categories.map((currentCategory) => {
              return (
                <Grid item md={4} xs={6} key={currentCategory}>
                  <Link
                    text={currentCategory}
                    variant="exploreCategoryText"
                    customClass={styles.item}
                    clickHandler={handleCategoriesClick}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Menu>
    </>
  );
};

export default ExploreMenu;
