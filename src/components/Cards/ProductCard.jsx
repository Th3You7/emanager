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
    //border: "1px solid",
    marginBottom: theme.spacing(1),
  },
}));

const ProductCard = ({ title, price, img }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" alt="product" image={img} title={title} />
      </CardActionArea>
      <CardContent>
        <Typography component="h4" variant="h6">
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
