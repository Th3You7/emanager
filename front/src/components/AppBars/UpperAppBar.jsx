import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteRounded, ArrowBackRounded } from "@material-ui/icons/";
import { removeAllAction } from "../../actions/cartAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    position: (props) =>
      /^\/product/.test(props.pathname) ? "absolute" : "static",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1.5, 0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flexGrow: {
    flexGrow: 2,
  },
}));

export default function UpperAppBar({ handleClick }) {
  const classes = useStyles(useLocation());
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeAllAction());
  };
  return (
    <div className={classes.root}>
      <IconButton aria-label="back" onClick={handleClick}>
        <ArrowBackRounded fontSize="inherit" color="primary" />
      </IconButton>

      {pathname !== "/admin" && (
        <IconButton color="inherit" aria-label="delete" onClick={handleDelete}>
          <DeleteRounded fontSize="inherit" />
        </IconButton>
      )}
    </div>
  );
}
