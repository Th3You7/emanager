import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "inline-block",
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(1),
    cursor: "pointer",
  },
}));

const CategoryCard = ({ title }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (category) => {
    history.push(`/store/${category.toLowerCase()}`);
  };

  return (
    <Paper className={classes.paper} onClick={() => handleClick(title)}>
      <Typography>{title.replace(/\b\w/g, (l) => l.toUpperCase())}</Typography>
    </Paper>
  );
};

export default CategoryCard;
