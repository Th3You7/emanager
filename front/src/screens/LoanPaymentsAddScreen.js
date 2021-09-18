import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { UpperAppBar } from "../components";
import { useForm } from "react-hook-form";
import { SaveOutlined } from "@material-ui/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { useHistory, useParams } from "react-router";
import { loanPaymentsAddAction, loanReset } from "../actions/loanAction";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  failed: {
    color: theme.palette.error["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },
  title: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 700,
  },
}));

const schema = yup.object().shape({
  payment: yup
    .number("payment should be a positive number")
    .required("payment is required"),
});

export default function LoanPaymentsAddScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { profileid } = useParams();
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { loading, payload, error } = useSelector(
    (state) => state.loanPaymentsAddReducer
  );

  useEffect(() => {
    if (payload) {
      setOpen(true);
    }
  }, [setOpen, payload]);

  const onSubmit = (data) => {
    dispatch(loanPaymentsAddAction({ ...data, profileid }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    dispatch(loanReset());
    history.goBack();
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography className={classes.title} component="h2" variant="h5">
          Add Payment
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.payment ? true : false}
            label="Payment"
            name="payment"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.payment?.message}
          />
          {!payload && !loading && (
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              startIcon={<SaveOutlined />}
              type="submit"
            >
              Save
            </Button>
          )}

          {loading && <CircularProgress color="inherit" />}

          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Saved successfully!
            </Alert>
          </Snackbar>

          {error && (
            <Typography className={classes.failed}>
              Error has occured
            </Typography>
          )}
        </form>
      </div>
    </>
  );
}
