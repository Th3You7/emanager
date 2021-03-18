const express = require("express");
const adminRouter = express.Router();

const asyncHandler = require("express-async-handler");
const { Product } = require("../models/productModel");

adminRouter.get(
  "/allproducts",
  asyncHandler(async (req, res) => {
    const data = await Product.find({});

    res.json(data);
  })
);

module.exports = adminRouter;
