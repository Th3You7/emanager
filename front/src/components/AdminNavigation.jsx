import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "95%",
    height: theme.spacing(6),
    margin: theme.spacing(0, "auto", 0.5),
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    margin: theme.spacing(0, 0, 0, 1.5),
  },
}));

export default function AdminNavigation({ children, name, path }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };
  return (
    <Paper
      variant="outlined"
      className={classes.paper}
      elevation={0}
      onClick={handleClick}
    >
      <div className={classes.flex}>
        {children}
        <p className={classes.p}>{name}</p>
      </div>
    </Paper>
  );
}
