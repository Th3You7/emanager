import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    flex: "0 1 48%",
    display: "flex",
    height: theme.spacing(10),
    marginBottom: theme.spacing(1),
  },
  area: {
    width: "30%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

const ProductCard = ({ title, price, img }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.img}
          component="img"
          alt="product"
          image={img}
          title={title}
        />
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
