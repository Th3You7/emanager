const express = require("express");
const { storeRouter } = require("./routes/storeRoute");
const { productRouter } = require("./routes/productRoute");
const mongoose = require("mongoose");
const { Product } = require("./models/productModel");
const { data } = require("./data");
const app = express();

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/eCommerce",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/", storeRouter);
app.use("/product", productRouter);

app.get("/insert", async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
