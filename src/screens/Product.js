import React, { useState } from "react";
import { CheckingAppBar, UpperAppBar } from "../components";
import {
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from "@material-ui/core";
import img from "../assets/sneaker.jpg";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", position: "relative", height: "100vh" },
  img: {
    width: "100%",
    height: "43vh",
  },
  content: {
    padding: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(3),
  },
}));

export default function Product() {
  const [size, setSize] = useState("");

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UpperAppBar />
      <img className={classes.img} src={img} alt="product" />
      <div className={classes.content}>
        <Typography component="h2" variant="h4" gutterBottom>
          Nike Air Max 200
        </Typography>
        <FormControl variant="outlined">
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
        </FormControl>
      </div>
      <CheckingAppBar />
    </div>
  );
}
