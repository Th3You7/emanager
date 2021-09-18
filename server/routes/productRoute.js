const express = require("express");
const Product = require("../models/productModel");
const productRouter = express.Router();
const asyncHandler = require("express-async-handler");

productRouter.get(
  "/:id?",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (id) {
      const product = await Product.findById(id);

      res.json(product);
    } else {
      const products = await Product.find({});

      res.json(products);
    }
  })
);

module.exports = productRouter;
