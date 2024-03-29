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
import { deleteSaleAction, resetSales } from "../actions/salesAction";
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
  const { saleId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelSaleReducer);

  const deleteReducer = useSelector((state) => state.deleteSaleReducer);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (deleteReducer?.payload) {
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
    dispatch(resetSales());
    history.replace("/admin/sales");
  };

  const handleDelete = () => {
    dispatch(deleteSaleAction(saleId));
  };

  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Remove Sale
        </Typography>
        <Typography>
          Are You Sure You wanna Delete <br />
          <b>{result.name}</b> ?
        </Typography>
        {!deleteReducer?.loading && !deleteReducer?.payload && (
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
            Removed successfully!
          </Alert>
        </Snackbar>
        {deleteReducer.error && !result && (
          <Typography className={classes.failed}>Error has occured</Typography>
        )}
      </div>
    </div>
  );
}
