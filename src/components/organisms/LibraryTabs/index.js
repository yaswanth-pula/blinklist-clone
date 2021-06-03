import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  tabsRoot: {
    padding: "3rem 0",
    width: "100%",
    fontFamily: `"CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
  },
  indicator: {
    backgroundColor: "#22c870",
  },
  wrapper: {
    alignItems: "normal",
    justifyContent: "normal",
    textAlign: "start",
    fontSize: "1rem",
    fontFamily: `"CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
    textTransform: "none",
  },
  selected: {
    color: "#22c870",
    "& $wrapper": {
      fontWeight: "bolder",
    },
  },
  textColor: {
    fontSize: "1rem",
    color: "#6d787e",
  },
});

const LibraryTabs = (props) => {
  const { informParent } = props;

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, selectedTab) => {
    setTabValue(selectedTab);
    informParent(selectedTab);
  };

  const styles = useStyles();
  return (
    <Tabs
      value={tabValue}
      classes={{
        root: styles.tabsRoot,
        indicator: styles.indicator,
      }}
      onChange={handleTabChange}
      variant="fullWidth"
    >
      <Tab
        value={0}
        label="Currently reading"
        classes={{
          wrapper: styles.wrapper,
          selected: styles.selected,
          textColorInherit: tabValue !== 0 && styles.textColor,
        }}
      />
      <Tab
        value={1}
        label="Finished"
        classes={{
          wrapper: styles.wrapper,
          selected: styles.selected,
          textColorInherit: tabValue !== 1 && styles.textColor,
        }}
      />
    </Tabs>
  );
};

export default LibraryTabs;
