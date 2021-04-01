import React from "react";
import { makeStyles, Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    background: "transparent",
    //boxShadow: theme.shadows[4],
  },
  fab: {
    width: "100%",
  },
}));

const CheckingAppBar = ({ handleCheck }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended" className={classes.fab} onClick={handleCheck}>
        Check Out
      </Fab>
    </div>
  );
};

export default CheckingAppBar;
