import React, { useCallback, useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import {
  Button,
  CircularProgress,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addSalesAction, resetSales } from "../actions/salesAction";
import { removeAllAction } from "../actions/cartAction";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },

  btn: {
    marginTop: theme.spacing(3),
  },

  failed: {
    color: theme.palette.error["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },
}));

export default function ConfirmScreen() {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cartReducer);
  const { result, fetching, error } = useSelector(
    (state) => state.addSalesReducer
  );

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);

  const handleBack = () => {
    dispatch(resetSales());
    history.replace("/cart");
  };

  const handleClick = () => {
    dispatch(addSalesAction(products));
    dispatch(removeAllAction());
  };

  const total = products.reduce((acc, curr) => acc + Number(curr.soldPrice), 0);
  const earning = () => {
    const prices = products.reduce((acc, curr) => acc + Number(curr.price), 0);
    return total - prices;
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <p>
          Products: <strong>{products.length}</strong>
        </p>
        <p>
          Total: <strong>{total}DH</strong>
        </p>
        <p>
          Earning: <strong>{earning()}DH</strong>
        </p>
        {!fetching && !result && (
          <Button
            className={classes.btn}
            variant="contained"
            onClick={handleClick}
          >
            Confirm
          </Button>
        )}

        {fetching && <CircularProgress />}

        {error && (
          <Typography className={classes.failed}>Error has occured</Typography>
        )}

        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Sales Saved successfully!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
