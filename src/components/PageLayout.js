import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { data } from "../data/devices";
import Tabs from "../components/Tabs/Tabs";
import SidePanel from "../components/SidePanel";

const useStyles = makeStyles(() => ({
  gridRoot: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    margin: "50px 20px 0 20px",
  },
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%",
    padding: 5,
  },
}));

const Devices = () => {
  const classes = useStyles();
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [mainContentGridXs, setMainContentGridXs] = useState(11);
  const [sidePanelHeaderText, setSidePanelHeaderText] = useState("");
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  //function called when a side tab is pressed
  const handleSidePanelExpansion = (headerText) => {
    setShowSidePanel(!showSidePanel);
    if (!showSidePanel) {
      setMainContentGridXs(7);
      setSidePanelHeaderText(headerText);
    } else {
      setMainContentGridXs(11);
      setSidePanelHeaderText("");
    }
  };

  return (
    <div className={classes.gridRoot}>
      {showSidePanel && (
        <Grid item xs={4}>
          <SidePanel headerText={sidePanelHeaderText} />
        </Grid>
      )}
      {/* render tabs which expands side panel */}
      <Grid item xs={1} style={{ marginTop: 50, marginLeft: 10 }}>
        <Tabs
          text="Notes"
          onClick={handleSidePanelExpansion}
          icon={showSidePanel}
        />
      </Grid>
    </div>
  );
};

export default Devices;
