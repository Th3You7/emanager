import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../actions/productsAction";
import { categoriesAction } from "../actions/categoriesAction";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { BottomAppBar, CategoryCard, ProductCard } from "../components";
import { useParams } from "react-router";
import { Skeleton } from "@material-ui/lab";

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
  const categories = useSelector((state) => state.categoriesReducer);

  useEffect(() => {
    dispatch(categoriesAction());
  }, [dispatch]);

  useEffect(() => {
    ctgry ? dispatch(productsAction(ctgry)) : dispatch(productsAction());
  }, [dispatch, ctgry]);

  if (error) return error;

  const categoriesSection = () => {
    return categories.categories.map((category) => (
      <CategoryCard key={category._id} title={category.name} />
    ));
  };

  const categoriesSkeleton = () => {
    const arr = [1, 2, 3, 4];

    return arr.map((x, i) => (
      <Paper key={i} style={{ marginRight: "8px", padding: "8px" }}>
        <Skeleton variant="text" width={60} height={20} />
      </Paper>
    ));
  };

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        {/* {[
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
        ))} */}

        {categories.fetching ? categoriesSkeleton() : categoriesSection()}
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
        {products.length === [] && (
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
