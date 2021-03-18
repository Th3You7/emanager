import React, { useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import {
  Fab,
  Typography,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/productsAction";
import { addToCartAction } from "../actions/cartAction";
import image from "../assets/sneaker.jpg";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", position: "relative", height: "100vh" },
  img: {
    width: "100%",
    height: "55vh",
  },
  content: {
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(3),
  },
  fab: {
    width: "94%",
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    bottom: 10,
  },
  size: {
    marginRight: theme.spacing(1.2),
  },

  price: {
    color: theme.palette.text.secondary,
  },
}));

export default function Product() {
  const [size, setSize] = useState("");
  const [soldPrice, setSoldPrice] = useState("");
  const [err, setErr] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { fetching, error, product } = useSelector(
    (state) => state.productDetailsReducer
  );

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [id, dispatch]);

  const handleSize = (size) => {
    setSize(size);
  };

  const handlePrice = (e) => {
    setSoldPrice(e.target.value);
  };

  const handleErr = () => {
    setErr(false);
  };

  const handleCheck = () => {
    if (soldPrice === "" || size === "") {
      setErr(true);
      return;
    }
    dispatch(addToCartAction({ ...product, size, soldPrice }));
    history.replace(`/cart/${id}?size=${size}&price=${soldPrice}`);
  };

  const handleClick = () => {
    history.goBack();
  };

  if (fetching) return "loading";
  if (error) return "error";
  return (
    <div className={classes.root}>
      {err && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0, .8)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "2px",
            }}
          >
            {" "}
            <Typography color="error" variant="h6">
              Enter The Price or Size
            </Typography>
            <Button onClick={handleErr} variant="contained" color="primary">
              OK
            </Button>
          </div>
        </div>
      )}

      <UpperAppBar handleClick={handleClick} />
      <img className={classes.img} src={image} alt={product.name} />
      <div className={classes.content}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h2" variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            gutterBottom
            className={classes.price}
          >
            {product.price}DH
          </Typography>
        </div>

        {/* <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={size}
            onChange={handleChange}
            label="Size"
            required
          >
            {Object.keys(product.availableSizes).map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select> */}

        <Typography component="h2" variant="subtitle2" gutterBottom>
          size
        </Typography>

        <div style={{ marginBottom: "8px" }}>
          {Object.keys(product.availableSizes).map((productSize) => (
            <Button
              variant="contained"
              key={productSize}
              size="small"
              color={size === productSize ? "primary" : "default"}
              onClick={() => handleSize(productSize)}
              className={classes.size}
            >
              {productSize}
            </Button>
          ))}
        </div>

        <TextField
          className={classes.textField}
          id="outlined-number"
          label="Price"
          InputLabelProps={{
            shrink: true,
          }}
          value={soldPrice}
          variant="outlined"
          onChange={handlePrice}
        />
      </div>
      <Fab
        color="primary"
        variant="extended"
        className={classes.fab}
        onClick={handleCheck}
      >
        Add To Cart
      </Fab>
    </div>
  );
}
