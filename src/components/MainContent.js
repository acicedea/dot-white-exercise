import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Devices from "../pages/Devices";

const useStyles = makeStyles(() => ({
  gridRoot: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    margin: "0 20px 0 20px",
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.gridRoot}>
      <Devices />
      <Contracts />
    </div>
  );
};

export default MainContent;
