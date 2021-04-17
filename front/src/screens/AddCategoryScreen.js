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
import { addCategoryAction, resetCategory } from "../actions/categoriesAction";

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
  name: yup.string().required(),
});

export default function AddCategoryScreen() {
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
  const { loading, payload, error } = useSelector(
    (state) => state.addCategoryReducer
  );

  useEffect(() => {
    if (payload) {
      setOpen(true);
    }
  }, [setOpen, payload]);

  const onSubmit = (data) => {
    dispatch(addCategoryAction(data));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    history.replace("/admin/categories");
    dispatch(resetCategory());
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.name ? true : false}
            label="Name"
            name="name"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.name?.message}
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

          {loading && <CircularProgress color="primary" />}

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
