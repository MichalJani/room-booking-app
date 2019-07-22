import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  button: {
    fontWeight: "bold",
    color: "white"
  }
}));

const BottomAppBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Button className={classes.button}>Find Free Space</Button>
          <div className={classes.grow} />
          <Button className={classes.button}>Schedule</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default BottomAppBar;
