import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const SelectField = () => {
  return (
    <Select value="category" fullWidth>
      <MenuItem value="category" disabled>
        Category
      </MenuItem>
      <MenuItem value="science">Science</MenuItem>
      <MenuItem value="economics">Economics</MenuItem>
      <MenuItem value="history">History</MenuItem>
    </Select>
  );
};

export default SelectField;
