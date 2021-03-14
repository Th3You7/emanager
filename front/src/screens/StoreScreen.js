import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../actions/productsAction";
import { makeStyles, Typography } from "@material-ui/core";
import { BottomAppBar, CategoryCard, ProductCard } from "../components";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
  carousel: {
    display: "flex",
    scrollbarWidth: "none", //for mz browser
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    padding: theme.spacing(0.2),
    marginBottom: theme.spacing(3.5),
    "&::-webkit-scrollbar": {
      // this
      display: "none", // for chrome
    }, // browser
  },

  title: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 700,
  },

  products: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const Store = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ctgry } = useParams();
  const { fetching, products, error } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    ctgry ? dispatch(productsAction(ctgry)) : dispatch(productsAction());
  }, [dispatch, ctgry]);

  if (error) return error;

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        {[
          "Hoddies",
          "T-shirt",
          "Sneakers",
          "Jeans",
          "Shirt",
          "Leather",
          "Sweater",
          "Jackets",
        ].map((category) => (
          <CategoryCard key={category} title={category} />
        ))}
      </div>

      <Typography className={classes.title} component="h2" variant="h5">
        Products
      </Typography>

      <div className={classes.products}>
        {products.map((product) => (
          <ProductCard
            key={product._id || product}
            id={product._id}
            title={product.name}
            price={product.price}
            // img={product.image}
            fetching={fetching}
          />
        ))}
        {products.length === 0 && (
          <Typography>
            No {ctgry.replace(ctgry[0], ctgry[0].toUpperCase())} Products In The
            Stock
          </Typography>
        )}
      </div>
      <BottomAppBar />
    </div>
  );
};

export default Store;
