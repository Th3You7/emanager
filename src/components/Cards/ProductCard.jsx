import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    flex: "0 1 48%",
    display: (props) => (props.pathname === "/store" ? "block" : "flex"),
    height: (props) =>
      props.pathname === "/store" ? "auto" : theme.spacing(10),
    marginBottom: theme.spacing(1),
  },
  area: {
    width: (props) => (props.pathname === "/store" ? "100%" : "30%"),
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: (props) => (props.pathname === "/store" ? "fill" : "contain"),
  },

  title: {
    color: (props) => (props.pathname === "/store" ? "red" : "yellow"),
  },
}));

const ProductCard = (props) => {
  const { title, price, img } = props;
  const classes = useStyles((props = useLocation()));
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <Link to="/product">
          <CardMedia
            className={classes.img}
            component="img"
            alt="product"
            image={img}
            title={title}
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography component="h4" variant="subtitle1">
          {title}
        </Typography>
        <Typography component="h5" variant="subtitle1">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
