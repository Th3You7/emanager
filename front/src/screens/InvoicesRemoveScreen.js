import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import {
  invoiceDeleteAction,
  resetInvoiceAction,
} from "../actions/invoiceAction";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";
import { Alert } from "@material-ui/lab";

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
  const { invoiceid } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelInvoiceReducer);
  const deleteReducer = useSelector((state) => state.invoiceDeleteReducer);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (deleteReducer?.result) {
      setOpen(true);
    }
  }, [setOpen, deleteReducer]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    dispatch(resetInvoiceAction());
    history.goBack();
  };

  const handleDelete = () => {
    dispatch(invoiceDeleteAction(invoiceid));
  };

  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography className={classes.title} variant="h3" component="h3">
          Remove Invoice
        </Typography>
        <Typography>
          Are You Sure You wanna Delete Invoice <br />
          <b>{result?.invoiceId}</b>
        </Typography>
        {!deleteReducer?.loading && !deleteReducer?.result && (
          <Button
            variant="contained"
            onClick={handleDelete}
            className={classes.btn}
          >
            Delete
          </Button>
        )}

        {deleteReducer.loading && <CircularProgress color="inherit" />}
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Invoice Removed successfully!
          </Alert>
        </Snackbar>
        {deleteReducer.error && (
          <Typography className={classes.failed}>Error has occured</Typography>
        )}
      </div>
    </div>
  );
}
