import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";
import { Alert } from "@material-ui/lab";
import { loanProductsRemoveACtion, loanReset } from "../actions/loanAction";

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

export default function RemoveScreen() {
  const classes = useStyles();
  const { profileid } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelProductsReducer);

  const { payload, loading, error } = useSelector(
    (state) => state.loanProductsRemoveReducer
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (payload) {
      setOpen(true);
    }
  }, [setOpen, payload]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    history.goBack();
    dispatch(loanReset());
  };

  const handleDelete = () => {
    dispatch(
      loanProductsRemoveACtion({ products: result, profileId: profileid })
    );
  };
  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Restore Products to Stock
        </Typography>
        <Typography>
          Are You Sure You wanna Restore This products package
          <br />
          <b>{result.payment}</b> ?
        </Typography>
        {!loading && !payload && (
          <Button
            variant="contained"
            onClick={handleDelete}
            className={classes.btn}
          >
            Delete
          </Button>
        )}

        {loading && <CircularProgress color="inherit" />}
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Saved successfully!
          </Alert>
        </Snackbar>
        {error && !result && (
          <Typography className={classes.failed}>Error has occured</Typography>
        )}
      </div>
    </div>
  );
}
