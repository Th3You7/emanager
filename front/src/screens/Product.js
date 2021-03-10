import React, { useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import {
  Fab,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from "@material-ui/core";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/productsAction";
import { addToCartAction } from "../actions/cartAction";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", position: "relative", height: "100vh" },
  img: {
    width: "100%",
    height: "50vh",
  },
  content: {
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(3),
  },
  form: {
    width: "100%",
  },
  fab: {
    width: "100%",
    margin: "70px auto 0",
  },
}));

export default function Product() {
  const [size, setSize] = useState("");
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

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleClick = () => {
    history.replace("/cart");

    dispatch(addToCartAction(product));
  };

  if (fetching) return "loading";
  if (error) return "error";
  return (
    <div className={classes.root}>
      <UpperAppBar />
      <img className={classes.img} src={product.image} alt={product.name} />
      <div className={classes.content}>
        <Typography component="h2" variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <FormControl variant="outlined" className={classes.form}>
          <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
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
          </Select>
          <TextField
            className={classes.textField}
            id="outlined-number"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
          />
          <Fab
            color="primary"
            variant="extended"
            className={classes.fab}
            onClick={handleClick}
          >
            Add To Cart
          </Fab>
        </FormControl>
      </div>
    </div>
  );
}
