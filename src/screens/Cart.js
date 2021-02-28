import React from "react";
import { ProductCard, UpperAppBar, CheckingAppBar } from "../components";
import { Grid, makeStyles } from "@material-ui/core";
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
      <CheckingAppBar />
    </div>
  );
};

export default Cart;
