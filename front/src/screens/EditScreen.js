import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { reset, editAction } from "../actions/adminAction";
import {
  CircularProgress,
  Snackbar,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import CreatableSelect from "react-select/creatable";

import Select from "react-select";
import { SaveOutlined, PhotoCameraOutlined } from "@material-ui/icons";
import { UpperAppBar } from "../components";
import { Alert } from "@material-ui/lab/";
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

  title: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 700,
  },
}));

const schema = yup.object().shape({
  name: yup.string().required(), //required
  price: yup
    .number()
    .positive("*Price must be a positive number")
    .required("*Price is Required"),
  category: yup.object().required("*Category is Required"),
  availableSize: yup.array().min(1),
  availableSizeValue: yup.array().min(1),
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

export default function EditScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, price, category, availableSizes, img } = useSelector(
    (state) => state.currSelProdReducer
  );
  const { loading, result, error } = useSelector((state) => state.editReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);

  const [load, setLoad] = useState("");
  const [productImg, setProductImg] = useState(img);
  const [errUpload, setErrUpload] = useState("");

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const url = `https://manage-commerce.herokuapp.com`;

  const handleImageChange = async (e) => {
    setLoad(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("public_id", productImg.public_id);
    try {
      const { data } = await axios.post(
        `${url}/api/admin/upload/addimg`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProductImg(data);
      setLoad(false);
      setErrUpload("");
      formData.delete("image");
    } catch (error) {
      setErrUpload(error.message);
      setLoad(false);
      formData.delete("image");
    }
  };

  const onSubmit = (data) => {
    dispatch(
      editAction(id, {
        ...data,
        img: {
          url: productImg.url,
          public_id: productImg.public_id,
        },
      })
    );
  };

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);

  const handleBack = () => {
    history.replace("/admin/allproducts");
    dispatch(reset());
  };

  const categoryDefaultValue = {
    value: category,
    label: `${category?.charAt(0).toUpperCase()}${category?.slice(1)}`,
  };

  const availableSizesDefaultValue =
    availableSizes &&
    Object.keys(availableSizes).map((x) => {
      return {
        label: x.toUpperCase(),
        value: x,
      };
    });

  const availableSizesValuesDefaultValue =
    availableSizes &&
    Object.keys(availableSizes).map((x) => {
      return {
        label: availableSizes[x],
        value: availableSizes[x],
      };
    });

  const allCatgories = categories.map((x) => {
    return {
      value: x?.name.toLowerCase(),
      label: `${x?.name.charAt(0).toUpperCase()}${x.name.slice(1)}`,
    };
  });

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

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Typography className={classes.title} component="h2" variant="h5">
            Edit Product
          </Typography>
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
            defaultValue={name}
            helperText={errors.name?.message}
          />

          <TextField
            error={errors.price ? true : false}
            className={classes.input}
            label="Price"
            name="price"
            margin="dense"
            fullWidth
            // variant="filled"
            inputRef={register}
            helperText={errors.price?.message.slice(0, 29)}
            defaultValue={price}
          />

          <Controller
            name="category"
            defaultValue={categoryDefaultValue}
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
            defaultValue={availableSizesDefaultValue}
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
            defaultValue={availableSizesValuesDefaultValue}
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

          {!load && !loading && !result && (
            <>
              <div style={{ margin: "16px 0" }}>
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
                  Product Image
                  <IconButton
                    color="inherit"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCameraOutlined />
                  </IconButton>
                </label>
              </div>

              {productImg.originalname && (
                <p style={{ marginTop: 0 }}>{productImg.originalname}</p>
              )}
              <br />
              {errUpload && (
                <p style={{ color: "red", marginTop: 0 }}>
                  {"Something went wrong!"}
                </p>
              )}
              <br />
            </>
          )}
          {!loading && !load && !result && (
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
          <br />
          {(load || loading) && <CircularProgress color="inherit" />}
          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Edited successfully!
            </Alert>
          </Snackbar>
          {error && !result && (
            <Typography className={classes.failed}>
              Error has occured
            </Typography>
          )}
        </form>
      </div>
    </>
  );
}
