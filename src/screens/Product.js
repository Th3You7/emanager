import React from "react";
import { CheckingAppBar } from "../components";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckingAppBar />
    </div>
  );
}
