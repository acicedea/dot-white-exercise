import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../data/contracts";
import CustomCard from "../components/CustomCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  gridRoot: {
    flexGrow: 1,
    width: "100%",
    margin: "50px 20px 0 20px",
  },
  h1: {
    marginTop: 50,
    marginLeft: 10,
    color: "#0854e8",
  },
}));

const cardList = () => {
  return data.map(({ author, timestamp, text, key }) => (
    <Grid key={key} item>
      <CustomCard
        author={author}
        timestamp={timestamp}
        text={text}
        cardKey={key}
      />
    </Grid>
  ));
};

const Contracts = () => {
  const classes = useStyles();
  return (
    <div className={classes.gridRoot}>
      <h1 className={classes.h1}>Contracts</h1>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {cardList()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contracts;
