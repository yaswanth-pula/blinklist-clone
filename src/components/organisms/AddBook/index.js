import React, { useEffect, useState } from "react";
import Link from "../../atoms/Link";
import SelectField from "../../atoms/SelectField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Text from "../../atoms/Text";
import FormInputField from "../../moleclues/FormInputField";
import { makeStyles } from "@material-ui/core/styles";
import { BOOK_STATUS_FRESH, CATEGORIES } from "../../../utils/config";
import CloseIcon from "@material-ui/icons/Close";
import AppIconButton from "../../moleclues/AppIconButton";
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
    paddingRight: "2.5em",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  disabledButton: {
    pointerEvents: "none",
    color: "#6d787e",
    borderColor: "#bac8ce",
  },
  cancelButton: {
    "&:hover": {
      color: "#0365F2",
    },
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
  const emptyErrorBook = {
    title: { isError: true, errorMessage: "" },
    author: { isError: true, errorMessage: "" },
    readTime: { isError: true, errorMessage: "" },
    url: { isError: true, errorMessage: "" },
    category: { isError: true, errorMessage: "" },
  };
  const [freshBook, setFreshBook] = useState(emptyBook);
  const [bookFieldError, setBookFieldError] = useState(emptyErrorBook);
  const [formErrorStatus, setFormErrorStatus] = useState(true);

  useEffect(() => {
    let currentErrorStatus = isFieldsWithError();
    setFormErrorStatus(currentErrorStatus);
  }, [bookFieldError]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFreshBook(emptyBook);
    setBookFieldError(emptyErrorBook);
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
    postFreshBook();
  };

  const isFieldsWithError = () => {
    return (
      bookFieldError.author.isError ||
      bookFieldError.title.isError ||
      bookFieldError.readTime.isError ||
      bookFieldError.url.isError ||
      bookFieldError.category.isError
    );
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
          <div className={styles.headerSection}>
            <Text content="Add New Book" variant="text_form_header" />
            <AppIconButton
              children={<CloseIcon />}
              clickHandler={handleClose}
              customClass={styles.cancelButton}
            />
          </div>

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
            customClass={styles.cancelButton}
            clickHandler={handleClose}
          />
          <Link
            text="Add New Book"
            variant="libraryCardButton"
            clickHandler={handleAddNewBook}
            customClass={formErrorStatus ? styles.disabledButton : ""}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBook;
