const express = require("express");
const storeRouter = express.Router();

const { Product } = require("../models/productModel");

storeRouter.get("/:ctgry?", async (req, res) => {
  const { ctgry } = req.params;
  const category = ctgry || "Hoddies";
  const products = await Product.find({ category }).sort({ name: 1 });

  res.send(products);
});

exports.storeRouter = storeRouter;
