const express = require("express");
const storeRouter = express.Router();
const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

const Product = require("../models/productModel");

storeRouter.get(
  "/:ctgry?",
  asyncHandler(async (req, res) => {
    const { ctgry } = req.params;
    const defaultCategory = await Category.find({});
    const category = ctgry || defaultCategory[0].name;

    const products = await Product.find({ category }).sort({ name: 1 });

    res.send(products);
  })
);

module.exports = storeRouter;
