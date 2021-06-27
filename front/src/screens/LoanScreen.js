import React from "react";
import { LoanProfileCard, UpperAppBar } from "../components";
import { fade, InputBase, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
  search: {
    position: "relative",
    //borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Loan() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.replace("/");
  };
  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {[1, 2, 3, 4].map((it, i) => (
          <LoanProfileCard key={it} />
        ))}
      </div>
    </div>
  );
}
