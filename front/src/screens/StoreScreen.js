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
  const { category } = useParams();
  const { fetching, products, error } = useSelector(
    (state) => state.productsReducer
  );

  console.log(category);

  useEffect(() => {
    if (category) {
      dispatch(productsAction());
    } else {
      dispatch(productsAction(category));
    }
  }, [dispatch, category]);

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
      </div>
      <BottomAppBar />
    </div>
  );
};

export default Store;
