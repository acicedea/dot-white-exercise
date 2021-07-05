import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./tabs.css";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0854e8",
    marginBottom: 30,
    width: 30,
    height: 100,
    borderRadius: 5,
    color: "#FFFFFF",
    paddingTop: 15,
    textAlign: "center",
  },
}));

const Tabs = ({ onClick, text, icon }) => {
  const classes = useStyles();

  //callback function that sets side panel visibility state
  const handleOnClick = () => {
    return onClick(text);
  };

  return (
    <div className={classes.root} onClick={handleOnClick}>
      <p className="paragraph"> {text} </p>
      {/* render icon conditional based on a prop which contains side panel visibility state*/}
      {icon ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </div>
  );
};

export default Tabs;
