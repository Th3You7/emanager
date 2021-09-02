import { Button, makeStyles, Snackbar, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  loanAction,
  loanProfileDeleteAction,
  loanReset,
} from "../actions/loanAction";
import { UpperAppBar } from "../components";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },

  btn: {
    background: theme.palette.error["light"],
    margin: theme.spacing(2, 0),
  },

  title: {
    fontWeight: 700,
    fontSize: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

export default function RemoveLoanProfile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  const {
    data: { name },
  } = useSelector((state) => state.loanProfileReducer);
  const { result, error } = useSelector(
    (state) => state.loanProfileDeleteReducer
  );
  const dispatch = useDispatch();
  const { profileid } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [setOpenErr, error]);
  const handleDelete = () => {
    dispatch(loanProfileDeleteAction(profileid));
  };
  const handleBack = () => {
    if (result) {
      dispatch(loanAction());
      dispatch(loanReset());
      history.replace("/loan");
    } else {
      history.goBack();
    }
  };
  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);
  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Remove Profile
        </Typography>
        <Typography>
          Are You Sure You wanna Delete <br />
          <b>{name} profile</b> ?
        </Typography>
        {!result && !error && (
          <Button
            variant="contained"
            onClick={handleDelete}
            className={classes.btn}
          >
            Delete
          </Button>
        )}
      </div>

      <Snackbar open={open} onClose={handleClose}>
        <Alert severity="success">Profile has been deleted!</Alert>
      </Snackbar>
      <Snackbar open={openErr} onClose={handleClose}>
        <Alert severity="success">an error has occured!</Alert>
      </Snackbar>
    </>
  );
}
