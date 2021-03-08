import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "inline-block",
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(1),
  },
}));

const CategoryCard = ({ title }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography>{title}</Typography>
    </Paper>
  );
};

export default CategoryCard;
