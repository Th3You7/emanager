import React from "react";
import { ProductCard, UpperAppBar, CheckingAppBar } from "../components";
import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

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
  const { products } = useSelector((state) => state.cartReducer);

  const subTotal = products.reduce(
    (acc, curr) => acc + Number(curr.soldPrice),
    0
  );
  const earning = () => {
    const subPrice = products.reduce(
      (acc, curr) => acc + Number(curr.price),
      0
    );
    return subTotal - subPrice;
  };
  return (
    <div className={classes.root}>
      <UpperAppBar />
      <div>
        {products &&
          products.map((product, index) => (
            <div className={classes.product} key={index}>
              <ProductCard
                id={product._id}
                title={product.name}
                price={product.price}
                size={product.size}
                soldPrice={product.soldPrice}
              />
            </div>
          ))}
      </div>
      <div className={classes.total}>
        <div>
          <Typography component="span" variant="body2">
            Earning:{" "}
          </Typography>
          <Typography component="span" variant="body1">
            {earning()}DH
          </Typography>
        </div>
        <div>
          <Typography component="span" variant="body2">
            Subtotal:{" "}
          </Typography>
          <Typography component="span" variant="body1">
            {subTotal}DH
          </Typography>
        </div>
      </div>
      <CheckingAppBar />
    </div>
  );
};

export default Cart;
