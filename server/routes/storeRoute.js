const express = require("express");
const storeRouter = express.Router();
const asyncHandler = require("express-async-handler");

const { Product } = require("../models/productModel");

storeRouter.get(
  "/:ctgry?",
  asyncHandler(async (req, res) => {
    const { ctgry } = req.params;
    const category = ctgry || "hoddies";
    const products = await Product.find({ category }).sort({ name: 1 });

    res.send(products);
  })
);

exports.storeRouter = storeRouter;
