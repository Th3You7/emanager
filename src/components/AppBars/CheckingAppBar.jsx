import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
}));

const CheckingAppBar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();
  const handleClick = () => {
    history.push("/cart");
  };

  return (
    <div className={classes.root}>
      <Typography component="h4" variant="h4">
        269
      </Typography>
      {pathname === "/product" ? (
        <Button variant="contained" onClick={handleClick}>
          Add To Cart
        </Button>
      ) : (
        <Button variant="contained" color="secondary">
          Check Out
        </Button>
      )}
    </div>
  );
};

export default CheckingAppBar;
