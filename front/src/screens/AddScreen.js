import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { UpperAppBar } from "../components";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { PhotoCameraOutlined, SaveOutlined } from "@material-ui/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAction, reset } from "../actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
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

const FILE_SIZE = 100 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup
    .number()
    .positive("*Price must be a positive number")
    .required("*Price is Required"),
  quantity: yup.number().positive(),
  category: yup.object().required("*Category is Required"),
  image: yup.mixed(),
  // .required("*Img is required")
  // .test(
  //   "fileSize",
  //   "File too large",
  //   (value) => value === null || (value[0] && value[0].size <= FILE_SIZE)
  // )
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value) =>
  //     value === null ||
  //     (value[0] && SUPPORTED_FORMATS.includes(value[0].type))
  // ),
});

export default function AddScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { loading, result, error } = useSelector((state) => state.addReducer);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const onSubmit = (data) => {
    dispatch(addAction(data));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    history.replace("/admin/allproducts");
    dispatch(reset());
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
          <div className={classes.flex}>
            <TextField
              error={errors.price ? true : false}
              style={{ flex: "0 1 46%" }}
              className={classes.input}
              label="Price"
              name="price"
              margin="dense"
              // variant="filled"
              inputRef={register}
              helperText={errors.price?.message.slice(0, 29)}
            />
            <TextField
              error={errors.quantity ? true : false}
              style={{ flex: "0 1 46%" }}
              className={classes.input}
              label="Quantity"
              name="quantity"
              margin="dense"
              // variant="filled"
              inputRef={register}
              helperText={errors.quantity?.message.slice(0, 32)}
            />
          </div>

          <Controller
            name="category"
            defaultValue=""
            control={control}
            className={classes.input}
            options={[
              { value: "sneakers", label: "Sneakers" },
              { value: "hoddies", label: "Hoddies" },
              { value: "jean", label: "Jean" },
            ]}
            styles={{
              option: (provided, state) => ({
                ...provided,
                color: state.isFocused || state.isSelected ? "white" : "black",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#333333",
                primary: "#0c0c0c",
              },
            })}
            as={Select}
          />
          {errors.category && (
            <p style={{ color: "red", marginTop: 0 }}>*Category is required</p>
          )}

          <div style={{ marginBottom: "16px" }}>
            <input
              name="image"
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              style={{ display: "none" }}
              ref={register}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCameraOutlined />
              </IconButton>
            </label>
          </div>

          {!result && !loading && (
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
