const express = require("express");
const { Product } = require("../models/productModel");
const productRouter = express.Router();

productRouter.get("/:id?", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.json(product);
});

exports.productRouter = productRouter;
