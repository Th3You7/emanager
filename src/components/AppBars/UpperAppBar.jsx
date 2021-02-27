import React from "react";
import { IconButton } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import { DeleteRounded, ArrowBackRounded } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flexGrow: {
    flexGrow: 2,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <IconButton color="inherit" aria-label="back">
          <ArrowBackRounded fontSize="inherit" />
        </IconButton>

        <IconButton color="inherit" aria-label="delete">
          <DeleteRounded fontSize="inherit" color="disabled" />
        </IconButton>
      </div>
    </>
  );
}
