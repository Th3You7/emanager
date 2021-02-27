import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
  },
}));

const CheckingAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="h4" variant="h4">
        269
      </Typography>
      <Button variant="contained">Add To Cart</Button>
    </div>
  );
};

export default CheckingAppBar;
