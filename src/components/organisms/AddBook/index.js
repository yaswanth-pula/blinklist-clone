import React from "react";
import Link from "../../atoms/Link";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Text from "../../atoms/Text";
import FormInputField from "../../moleclues/FormInputField";

const AddBook = () => {
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
          <FormInputField label="Title" />
          <FormInputField label="Author" />
          <FormInputField label="Cover Image Url" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBook;
