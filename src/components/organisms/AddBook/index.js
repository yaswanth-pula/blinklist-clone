import React, { useState } from "react";
import Link from "../../atoms/Link";
import SelectField from "../../atoms/SelectField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Text from "../../atoms/Text";
import FormInputField from "../../moleclues/FormInputField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: `"CeraPRO-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  },
});
const AddBook = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [freshBook, setFreshBook] = useState({
    bookName: "",
    author: "",
    readTime: "",
    url: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(freshBook);
    setOpen(false);
    setFreshBook({ bookName: "", author: "", readTime: "", url: "" });
  };

  const handleInputChange = (event) => {
    let fieldId = event.target.id;
    let fieldValue = event.target.value;
    setFreshBook((prev) => {
      return { ...prev, [fieldId]: fieldValue };
    });
  };

  return (
    <>
      <Link text="Add Book" variant="navLink" clickHandler={handleClickOpen} />
      <Dialog
        classes={{ root: styles.root }}
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Text content="Add New Book" variant="text_form_header" />
        </DialogTitle>
        <DialogContent>
          <FormInputField
            label="Title"
            type="text"
            id="bookName"
            value={freshBook.bookName}
            changeHandler={handleInputChange}
          />
          <FormInputField
            label="Author"
            type="text"
            id="author"
            value={freshBook.author}
            changeHandler={handleInputChange}
          />
          <FormInputField
            label="Cover Image Url"
            type="url"
            id="url"
            value={freshBook.url}
            changeHandler={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Link
            text="Cancel"
            variant="libraryCardButton"
            clickHandler={handleClose}
          />
          <Link
            text="Add New Book"
            variant="libraryCardButton"
            clickHandler={handleClose}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBook;
