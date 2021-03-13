const express = require("express");
const { storeRouter } = require("./routes/storeRoute");
const { productRouter } = require("./routes/productRoute");
const mongoose = require("mongoose");
const { Product } = require("./models/productModel");
const asyncHandler = require("express-async-handler");

const app = express();

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use("/store", storeRouter);
app.use("/product", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
