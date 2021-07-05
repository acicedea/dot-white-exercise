import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { data } from "../data/devices";
import Tabs from "../components/Tabs/Tabs";
import SidePanel from "../components/SidePanel";
import CustomCard from "../components/CustomCard";

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

  //function called when a card is selected
  const handleCardSelectOrRemove = (key) => {
    //check if selected card already exists in the array and remove it, else add it
    if (selectedKeys.indexOf(key) > -1) {
      setSelectedKeys(selectedKeys.filter((item) => item !== key));
      setSelectedItems(selectedItems.filter((item) => item !== data[key]));
    } else {
      setSelectedKeys((keys) => [...keys, key]);
      setSelectedItems((old) => [...old, data[key]]);
    }
  };

  //function to display a list a cards based on the data from devices.js
  const cardList = () => {
    return data.map(({ author, timestamp, text, key }) => (
      <Grid key={key} item>
        <CustomCard
          author={author}
          timestamp={timestamp}
          text={text}
          cardKey={key}
          onCardSelect={handleCardSelectOrRemove}
          selectedItems={selectedItems}
        />
      </Grid>
    ));
  };

  return (
    <div className={classes.gridRoot}>
      <Grid item className={classes.gridRoot} xs={mainContentGridXs}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {cardList()}
          </Grid>
        </Grid>
      </Grid>
      {showSidePanel && (
        <Grid item xs={4}>
          <SidePanel
            headerText={sidePanelHeaderText}
            closePanel={handleSidePanelExpansion}
            removeItem={handleCardSelectOrRemove}
            selectedItems={selectedItems}
          />
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
