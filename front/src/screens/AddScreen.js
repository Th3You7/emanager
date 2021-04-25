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
import CreatableSelect from "react-select/creatable";
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
import axios from "axios";

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

const FILE_SIZE = 100 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = yup.object().shape({
  name: yup.string().required(), //required
  price: yup
    .number()
    .positive("*Price must be a positive number")
    .required("*Price is Required"),
  category: yup.object().required("*Category is Required"),
  availableSize: yup.array().min(1),
  availableSizeValue: yup.array().min(1),
  image: yup
    .mixed()
    // .required("*Img is required")
    // .test(
    //   "fileSize",
    //   "File too large",
    //   (value) => value === null || (value[0] && value[0].size <= FILE_SIZE)
    // )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value === null ||
        (value[0] && SUPPORTED_FORMATS.includes(value[0].type))
    ),
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
  const { categories } = useSelector((state) => state.categoriesReducer);
  const [open, setOpen] = useState(false);
  const [img, setImage] = useState("");
  const [errUpload, setErrUpload] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const onSubmit = async (data) => {
    const { imageUrl } = img;
    dispatch(addAction({ ...data, imageUrl }));
  };

  const handleImageChange = async (e) => {
    setLoad(true);
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    try {
      const { data } = await axios.post("/api/admin/upload/addimg", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImage(data);
      setLoad(false);
    } catch (error) {
      setErrUpload(error.message);
      setLoad(false);
    }
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

  const isValidNewOption = (inputValue, selectValue, selectOptions) => {
    if (inputValue.trim().length === 0) {
      return false;
    }

    if (selectOptions.find((option) => option.name === inputValue)) {
      return true;
    }

    selectValue.forEach((x) => {
      if (Number(x.value) === Number(inputValue)) {
        return true;
      }
    });

    return true;
  };

  const allCatgories = categories.map((x) => {
    return {
      value: x.name.toLowerCase(),
      label: `${x.name.charAt(0).toUpperCase()}${x.name.slice(1)}`,
    };
  });

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <form
          autoComplete="off"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <TextField
            error={errors.price ? true : false}
            className={classes.input}
            fullWidth
            label="Price"
            name="price"
            margin="dense"
            // variant="filled"
            inputRef={register}
            helperText={errors.price?.message.slice(0, 29)}
          />
          <Controller
            name="category"
            defaultValue=""
            control={control}
            className={classes.input}
            options={allCatgories}
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
          <Controller
            name="availableSize"
            defaultValue=""
            control={control}
            className={classes.input}
            options={[
              { value: "sm", label: "SM" },
              { value: "m", label: "M" },
              { value: "l", label: "L" },
              { value: "xl", label: "XL" },
              { value: "xxl", label: "XXL" },
              { value: "xxxl", label: "XXXL" },
              { value: "38", label: "38" },
              { value: "39", label: "39" },
              { value: "40", label: "40" },
              { value: "41", label: "41" },
              { value: "42", label: "42" },
              { value: "43", label: "43" },
              { value: "44", label: "44" },
              { value: "45", label: "45" },
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
            isMulti
            closeMenuOnSelect={true}
            placeholder="Availabe Sizes"
            as={Select}
          />
          {errors.availableSize && (
            <p style={{ color: "red", marginTop: 0 }}>*Size is required</p>
          )}
          <Controller
            name="availableSizeValue"
            control={control}
            className={classes.input}
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
            rules={{ required: true }}
            defaultValue=""
            placeholder="Quantity"
            render={(props) => (
              <CreatableSelect
                isValidNewOption={isValidNewOption}
                isOptionSelected={() => false}
                inputRef={props.ref}
                value={props.value}
                onChange={(v) => props.onChange(v)}
                closeMenuOnSelect={false}
                //menuIsOpen={false}
                isMulti
                placeholder="Quantity"
              />
            )}
          />
          {errors.availableSizeValue && (
            <p style={{ color: "red", marginTop: 0 }}>
              *Size value is required
            </p>
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
              onChange={handleImageChange}
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
            {img && <p style={{ marginTop: 0 }}>{img.originalname}</p>}
            {errUpload && (
              <p style={{ color: "red", marginTop: 0 }}>{errUpload}</p>
            )}
            {load && <CircularProgress color="primary" />}
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
