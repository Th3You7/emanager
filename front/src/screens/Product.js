import React, { useState } from "react";
import { CheckingAppBar, UpperAppBar } from "../components";
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
import img from "../assets/sneaker.jpg";
import { useHistory } from "react-router-dom";
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

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleClick = () => {
    history.replace("/cart");
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UpperAppBar />
      <img className={classes.img} src={img} alt="product" />
      <div className={classes.content}>
        <Typography component="h2" variant="h5" gutterBottom>
          Nike Air Max 200
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
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={41}>41</MenuItem>
            <MenuItem value={42}>42</MenuItem>
            <MenuItem value={43}>43</MenuItem>
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
