import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Fab, Badge } from "@material-ui/core/";
import {
  LocalGroceryStoreRounded,
  AccountCircleRounded,
  LocalAtmRounded,
  Menu,
  Brightness4Rounded,
  Brightness7Rounded,
} from "@material-ui/icons/";
import { useSelector } from "react-redux";
import { MuiThemeContext } from "../../providers/ThemeProvider";

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

  const { theme, toggleTheme } = useContext(MuiThemeContext);
  const {
    palette: { type },
  } = theme;

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleTheme}
          >
            {type === "light" ? <Brightness4Rounded /> : <Brightness7Rounded />}
          </IconButton>

          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            component={Link}
            to="/cart"
          >
            <StyledBadge
              badgeContent={products.length}
              color="primary"
              overlap="circle"
            >
              <LocalGroceryStoreRounded />
            </StyledBadge>
          </Fab>

          <div className={classes.grow} />
          <IconButton color="inherit" component={Link} to="/loan">
            <LocalAtmRounded />
          </IconButton>
          <IconButton edge="end" color="inherit" component={Link} to="/admin">
            <AccountCircleRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomAppBar;
