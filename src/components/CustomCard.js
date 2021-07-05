import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    maxWidth: 300,
    minHeight: 200,
    position: "relative",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    position: "absolute",
    bottom: 20,
  },
}));

const CustomCard = ({ author, text, timestamp, cardKey, onCardSelect }) => {
  const classes = useStyles();

  //callback function to set a state with selected keys
  const handleOnCardSelect = () => {
    return onCardSelect(cardKey);
  };

  return (
    <div>
      <Card className={classes.root} key={cardKey}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {author}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {timestamp}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleOnCardSelect}
            className={classes.button}
          >
            Select
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
