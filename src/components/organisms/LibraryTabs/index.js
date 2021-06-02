import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "3rem 0",
  },
});

const LibraryTabs = (props) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = () => {
    setTabValue((val) => (val ? 0 : 1));
  };

  const styles = useStyles();
  return (
    <Tabs value={tabValue} className={styles.root} onChange={handleTabChange}>
      <Tab label="Currently Reading" />
      <Tab label="Finished" />
    </Tabs>
  );
};

export default LibraryTabs;
