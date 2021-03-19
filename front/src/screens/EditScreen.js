import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(12, 12, 12, .7)",
  },

  form: {
    background: "#0e101c",
    width: "90%",
    padding: theme.spacing(3),
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "4px",
    zIndex: 100,
  },

  input: {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid white",
    padding: "10px 15px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  label: {
    lineHeight: 2,
    textAlign: "left",
    display: "block",
    marginBottom: "13px",
    marginTop: "20px",
    color: "white",
    fontSize: "14px",
    fontWeight: 200,
  },

  p: {
    color: "red",
  },

  btn: {
    borderRadius: "4px",
    background: "#ec5990",
    color: "white",
    textTransform: "uppercase",
    border: "none",
    margin: theme.spacing(3, 0, 1),
    padding: theme.spacing(1.5),
    fontSize: "16px",
    fontWeight: 300,
  },
}));

export default function EditScreen() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const history = useHistory();
  const onSubmit = () => console.log("love");

  const handleClick = () => {
    history.replace("/admin/allproducts");
  };

  return (
    <div className={classes.overlay} onClick={handleClick}>
      <div className={classes.contianer} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Product Name
          </label>
          <input name="name" ref={register} className={classes.input} />

          <label htmlFor="price" className={classes.label}>
            Price
          </label>
          <input
            name="price"
            ref={register({
              validate: {
                positiveNumber: (value) => parseFloat(value) > 0,
              },
            })}
            className={classes.input}
          />
          {errors.price && errors.price.type === "positiveNumber" && (
            <p className={classes.p}>Price is invalid</p>
          )}

          <label htmlFor="category" className={classes.label}>
            Category
          </label>
          <input name="category" ref={register} className={classes.input} />
          <label htmlFor="quantity" className={classes.label}>
            Quantity
          </label>
          <input
            name="quantity"
            type="text"
            ref={register({
              validate: {
                positiveNumber: (value) => parseFloat(value) > 0,
              },
            })}
            className={classes.input}
          />
          {errors.quantity && errors.quantity.type === "positiveNumber" && (
            <p className={classes.p}>Your quantity should be greater than 0</p>
          )}

          <input type="submit" value="Edit Product" className={classes.btn} />
        </form>
      </div>
    </div>
  );
}
