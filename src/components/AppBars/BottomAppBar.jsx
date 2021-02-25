import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Fab } from "@material-ui/core/";
import {
  LocalGroceryStoreRounded,
  AccountCircleRounded,
  LocalAtmRounded,
  Menu,
} from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

const BottomAppBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <LocalGroceryStoreRounded />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <LocalAtmRounded />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AccountCircleRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomAppBar;
