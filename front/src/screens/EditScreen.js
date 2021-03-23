import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { reset, editAction } from "../actions/adminAction";
import { CircularProgress, Snackbar, Typography } from "@material-ui/core";
import { UpperAppBar } from "../components";
import { Alert } from "@material-ui/lab/";

const useStyles = makeStyles((theme) => ({
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  //   backgroundColor: "rgba(12, 12, 12, .7)",
  // },

  container: {
    background: "#0e101c",
    minHeight: "100vh",
  },

  form: {
    width: "100%",
    padding: theme.spacing(0, 4),
    // margin: "0 auto",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)",
  },

  input: {
    display: "block",
    background: theme.palette.background.paper,
    boxSizing: "border-box",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid white",
    padding: "8px 12px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  label: {
    lineHeight: 2,
    textAlign: "left",
    display: "block",
    marginBottom: "8px",
    marginTop: "10px",
    color: "white",
    fontSize: "14px",
    fontWeight: 200,
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",
  },

  inlineLabel: {
    lineHeight: 2,
    textAlign: "left",
    marginBottom: "8px",
    marginTop: "10px",
    marginRight: "10px",
    color: "white",
    fontSize: "14px",
    fontWeight: 200,
  },

  p: {
    color: theme.palette.error["dark"],
    marginBottom: 0,
  },
  success: {
    color: theme.palette.success["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },

  falied: {
    color: theme.palette.error["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },

  btn: {
    borderRadius: "4px",
    background: "#ec5990",
    color: "white",
    border: "none",
    margin: theme.spacing(3, 0, 1),
    padding: theme.spacing(1.2),
    fontSize: "16px",
    fontWeight: 300,
  },
}));

const FILE_SIZE = 100 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = yup.object().shape({
  name: yup.string(),
  price: yup
    .number()
    .positive("*Price must be a positive number")
    .required("*Price is Required"),
  quantity: yup.number().positive(),
  category: yup.string().required("*Category is Required"),
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
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const currProduct = useSelector((state) => state.currSelProdReducer);
  const { loading, result, error } = useSelector((state) => state.editReducer);

  const onSubmit = () => {
    const values = getValues();
    dispatch(editAction(id, values));
  };

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const handleBack = () => {
    history.replace("/admin/allproducts");
    dispatch(reset());
  };

  // useEffect(() => {
  //   if (result || error) {
  //     const timeout = setTimeout(() => {
  //       history.replace(search.split("=")[1]);
  //       dispatch(reset());
  //     }, 6000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }

  //   return;
  // }, [history, result, error, search, dispatch]);

  return (
    <>
      <div className={classes.container}>
        <UpperAppBar handleBack={handleBack} />
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Product Name
          </label>
          <input
            name="name"
            ref={register}
            className={classes.input}
            defaultValue={currProduct.name}
          />
          {<p className={classes.p}>{errors.name?.message}</p>}
          <div className={classes.flex}>
            <div style={{ flex: "0 1 45%" }}>
              <label htmlFor="price" className={classes.label}>
                Price
              </label>
              <input
                name="price"
                type="text"
                ref={register}
                className={classes.input}
                defaultValue={currProduct.price}
              />
            </div>

            <div style={{ flex: "0 1 45%" }}>
              <label htmlFor="quantity" className={classes.label}>
                Quantity
              </label>
              <input
                name="quantity"
                type="text"
                ref={register}
                className={classes.input}
                defaultValue={30}
              />
            </div>
          </div>
          {errors.price && (
            <p className={classes.p}>{errors.price.message.slice(0, 29)}</p>
          )}
          {<p className={classes.p}>{errors.quantity?.message.slice(0, 32)}</p>}
          <label htmlFor="category" className={classes.label}>
            Category
          </label>
          <input
            name="category"
            ref={register}
            className={classes.input}
            defaultValue={currProduct.category}
          />
          {<p className={classes.p}>{errors.category?.message}</p>}
          <label htmlFor="image" className={classes.label}>
            Image
          </label>
          <input
            name="image"
            ref={register}
            type="file"
            className={classes.input}
            defaultValue={null}
          />
          {<p className={classes.p}>{errors.image?.message}</p>}
          {!result && (
            <input type="submit" value="Edit Product" className={classes.btn} />
          )}
          {loading && <CircularProgress color="primary" />}

          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Edit was successful!
            </Alert>
          </Snackbar>

          {error && (
            <Typography className={classes.error}>Error has occured</Typography>
          )}
        </form>
      </div>
    </>
  );
}
