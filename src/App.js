import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { Route } from "react-router-dom";

import { routes } from "./utils/routes";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <ResponsiveDrawer />
      {routeComponents}
    </div>
  );
};

export default App;
