import React from "react";
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Link
        // href="#"
        text="Add Book"
        variant="navLink"
        clickHandler={handleClickOpen}
      />
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
          <FormInputField type="number" label="Title" />
          <FormInputField label="Author" />
          <FormInputField label="Cover Image Url" />
          {/* <SelectField /> */}
        </DialogContent>
        <DialogActions>
          <Link text="Cancel" variant="libraryCardButton" />
          <Link text="Add New Book" variant="libraryCardButton" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBook;
