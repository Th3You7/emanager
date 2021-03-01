import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { BottomAppBar, CategoryCard, ProductCard } from "../components";
import { data } from "./data";
import img from "../assets/sneaker.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
  carousel: {
    display: "flex",
    overflowY: "scroll",
    marginBottom: theme.spacing(3.5),
  },

  title: {},

  products: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const Store = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <UpperAppBar /> */}
      <Typography className={classes.title} component="h2" variant="h5">
        Categories
      </Typography>
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
      <Typography className={classes.title} component="h2" variant="h3">
        Products
      </Typography>
      <div className={classes.products}>
        {data.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            img={img}
          />
        ))}
      </div>
      <BottomAppBar />
    </div>
  );
};

export default Store;
