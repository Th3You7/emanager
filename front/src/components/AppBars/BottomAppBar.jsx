import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Fab, Badge } from "@material-ui/core/";
import {
  LocalGroceryStoreRounded,
  AccountCircleRounded,
  LocalAtmRounded,
  Menu,
} from "@material-ui/icons/";
import { useSelector } from "react-redux";

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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: -9,
    padding: "0 4px",
  },
}))(Badge);

const BottomAppBar = () => {
  const classes = useStyles();
  const { products } = useSelector((store) => store.cartReducer);

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar variant="regular">
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <Link to="/cart">
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <StyledBadge
                badgeContent={products.length}
                color="primary"
                overlap="circle"
              >
                <LocalGroceryStoreRounded />
              </StyledBadge>
            </Fab>
          </Link>
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
