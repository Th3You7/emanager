import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Badge,
  withStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../../actions/cartAction";
import { resetProduct } from "../../actions/productsAction";

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "visible",
    flex: "0 1 48%",
    display: (props) => (/^\/store/.test(props.pathname) ? "block" : "flex"),
    height: (props) =>
      /^\/store/.test(props.pathname) ? "auto" : theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    width: (props) => (/^\/store/.test(props.pathname) ? "100%" : "70%"),
  },
  area: {
    width: (props) => (/^\/store/.test(props.pathname) ? "100%" : "30%"),
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  price: {
    color: theme.palette.text.secondary,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 0,
    padding: "0 4px",
  },
}))(Badge);

const ProductCard = (props) => {
  const { id, title, price, img, fetching, soldPrice, size, index } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles((props = location));
  const history = useHistory();

  const regEx = /^\/cart/;
  const to = `/product/${id}`;

  const handleRemove = () => {
    dispatch(removeFromCartAction(index));
  };

  const handleClick = () => {
    dispatch(resetProduct());
    history.push(to);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        {fetching ? (
          <Skeleton variant="rect" height={140} width="100%" />
        ) : (
          <CardMedia
            className={classes.img}
            component="img"
            alt={title}
            image={img}
            title={title}
            onClick={handleClick}
          />
        )}
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        {fetching ? (
          <Skeleton variant="text" width="70%" />
        ) : (
          <Typography component="h4" variant="body2">
            {title}
          </Typography>
        )}
        {regEx.test(location.pathname) && (
          <Typography variant="subtitle2">Size: {size}</Typography>
        )}
        <div style={{ display: "flex" }}>
          {fetching ? (
            <Skeleton variant="text" width="40%" />
          ) : (
            <Typography
              component="h4"
              variant="body1"
              className={classes.price}
              style={{ marginRight: "48px" }}
            >
              {price}DH
            </Typography>
          )}
          {regEx.test(location.pathname) && (
            <Typography
              component="h4"
              variant="body1"
              className={classes.price}
            >
              {soldPrice}DH
            </Typography>
          )}
        </div>
      </CardContent>
      {regEx.test(location.pathname) && (
        <StyledBadge
          color="error"
          badgeContent={"X"}
          onClick={handleRemove}
          style={{ cursor: "pointer" }}
        ></StyledBadge>
      )}
    </Card>
  );
};

export default ProductCard;
