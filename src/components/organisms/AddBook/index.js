import React, { useState } from "react";
import Link from "../../atoms/Link";
import SelectField from "../../atoms/SelectField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Text from "../../atoms/Text";
import FormInputField from "../../moleclues/FormInputField";
import { DialogContentText, IconButton, makeStyles } from "@material-ui/core";
import { BOOK_STATUS_FRESH, CATEGORIES } from "../../../utils/constant";
import CloseIcon from "@material-ui/icons/Close";
import {
  checkForEmptyValue,
  checkReadTime,
  checkValidUrl,
} from "../../../utils/validator";

const useStyles = makeStyles({
  root: {
    fontFamily: `"CeraPRO-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  },
  actionRoot: {
    paddingBottom: "2em",
    paddingRight: "1.5em",
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
const AddBook = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const emptyBook = {
    title: "",
    author: "",
    readTime: "",
    url: "",
    category: "",
  };
  const [freshBook, setFreshBook] = useState(emptyBook);
  const [bookFieldError, setBookFieldError] = useState(emptyBook);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFreshBook(emptyBook);
    setBookFieldError(emptyBook);
  };
  const postFreshBook = () => {
    const url = `http://localhost:3000/books`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        status: BOOK_STATUS_FRESH,
        ...freshBook,
      }),
    }).catch((err) => {
      console.log(err);
    });
    handleClose();
  };

  const handleAddNewBook = () => {
    console.log(isFieldsWithError());
    if (isFieldsWithError()) return;
    postFreshBook();
  };

  const isFieldsWithError = () => {
    setBookFieldError({
      title: checkForEmptyValue(freshBook.title),
      author: checkForEmptyValue(freshBook.author),
      category: checkForEmptyValue(freshBook.category),
      url: checkValidUrl(freshBook.url),
      readTime: checkReadTime(freshBook.readTime),
    });

    let validationResult =
      bookFieldError.author.isError ||
      bookFieldError.title.isError ||
      bookFieldError.readTime.isError ||
      bookFieldError.url.isError ||
      bookFieldError.category.isError;
    if (validationResult === undefined) return true;
    return validationResult;
  };

  const validateFieldsOnChange = (fieldId, fieldValue) => {
    switch (fieldId) {
      case "title":
      case "author":
      case "category":
        setBookFieldError((prev) => {
          return { ...prev, [fieldId]: checkForEmptyValue(fieldValue) };
        });
        break;
      case "url":
        setBookFieldError((prev) => {
          return { ...prev, [fieldId]: checkValidUrl(fieldValue) };
        });
        break;
      case "readTime":
        setBookFieldError((prev) => {
          return { ...prev, [fieldId]: checkReadTime(fieldValue) };
        });
        break;
    }
  };

  const handleInputChange = (event) => {
    let fieldId = event.target.id;
    let fieldValue = event.target.value;
    setFreshBook((prev) => {
      return { ...prev, [fieldId]: fieldValue };
    });
    validateFieldsOnChange(fieldId, fieldValue);
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
        <DialogContent>
          <div className={styles.closeButton}>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContentText>
            <Text content="Add New Book" variant="text_form_header" />
          </DialogContentText>
          <FormInputField
            label="Title"
            type="text"
            id="title"
            maxLength="40"
            value={freshBook.title}
            changeHandler={handleInputChange}
            isError={bookFieldError.title.isError}
            errorText={bookFieldError.title.errorMessage}
          />
          <FormInputField
            label="Author"
            type="text"
            id="author"
            maxLength="40"
            value={freshBook.author}
            changeHandler={handleInputChange}
            isError={bookFieldError.author.isError}
            errorText={bookFieldError.author.errorMessage}
          />
          <FormInputField
            label="Cover Image Url"
            type="url"
            id="url"
            value={freshBook.url}
            changeHandler={handleInputChange}
            isError={bookFieldError.url.isError}
            errorText={bookFieldError.url.errorMessage}
          />
          <FormInputField
            label="Book Read Time"
            type="number"
            id="readTime"
            value={freshBook.readTime}
            changeHandler={handleInputChange}
            isError={bookFieldError.readTime.isError}
            errorText={bookFieldError.readTime.errorMessage}
          />
          <SelectField
            id="category"
            options={CATEGORIES}
            value={freshBook.category}
            changeHandler={handleInputChange}
            isError={bookFieldError.category.isError}
            errorText={bookFieldError.category.errorMessage}
          />
        </DialogContent>
        <DialogActions className={styles.actionRoot}>
          <Link
            text="Cancel"
            // variant="libraryCardButton"
            clickHandler={handleClose}
          />
          <Link
            text="Add New Book"
            variant="libraryCardButton"
            clickHandler={handleAddNewBook}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBook;
