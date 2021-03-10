import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../actions/productsAction";
import { makeStyles, Typography } from "@material-ui/core";
import { BottomAppBar, CategoryCard, ProductCard } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
  carousel: {
    display: "flex",
    //overflowY: "scroll",
    marginBottom: theme.spacing(3.5),
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
  const { fetching, products, error } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  if (error) return error;

  return (
    <div className={classes.root}>
      {/* <UpperAppBar /> */}
      {/* <Typography className={classes.title} component="h2" variant="h5">
        Categories
      </Typography> */}
      <div className={classes.carousel}>
        {[
          "Hoddies",
          "T-Shirt",
          "Sneakers",
          "Jeans",
          "Shirts",
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
      </div>
      <BottomAppBar />
    </div>
  );
};

export default Store;
