import React from "react";
import { ProductCard, UpperAppBar, CheckingAppBar } from "../components";
import { makeStyles, Typography } from "@material-ui/core";
import { data } from "./data";
import img from "../assets/sneaker.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  product: {
    width: "90%",
    margin: "0 auto",
  },
  total: {
    width: "90%",
    margin: "8px auto 0",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Cart = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UpperAppBar />
      <div>
        {data.map((product, index) => (
          <div className={classes.product} key={index}>
            <ProductCard
              title={product.title}
              price={product.price}
              img={img}
            />
          </div>
        ))}
      </div>
      <div className={classes.total}>
        <Typography component="h5" variant="subtitle1">
          Subtotal:{" "}
          <Typography component="span" variant="subtitle2">
            300
          </Typography>
        </Typography>
        <Typography component="h5" variant="subtitle1">
          Earning:{" "}
          <Typography component="span" variant="subtitle2">
            150
          </Typography>
        </Typography>
      </div>
      <CheckingAppBar />
    </div>
  );
};

export default Cart;
