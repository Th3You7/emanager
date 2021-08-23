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
import { useHistory } from "react-router";
import { addSpendingAction, resetSpending } from "../actions/spendingsAction";

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
}));

const schema = yup.object().shape({
  withdraw: yup.number().required(),
  comment: yup.string(),
});

export default function AddSpendingScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { fetching, spending, error } = useSelector(
    (state) => state.addSpendingReducer
  );

  useEffect(() => {
    if (spending) {
      setOpen(true);
    }
  }, [setOpen, spending]);

  const onSubmit = (data) => {
    dispatch(addSpendingAction(data));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    dispatch(resetSpending());
    history.replace("/admin/spending");
    //dispatch(resetCategory());
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.withdraw ? true : false}
            label="Withdraw"
            name="withdraw"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.withdraw?.message}
          />{" "}
          <TextField
            error={errors.comment ? true : false}
            label="Comment"
            name="comment"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.comment?.message}
          />
          {!spending && !fetching && (
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
          {fetching && <CircularProgress color="primary" />}
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
