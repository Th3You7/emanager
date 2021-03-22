const express = require("express");
const adminRouter = express.Router();

const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

adminRouter.get(
  "/allproducts",
  asyncHandler(async (req, res) => {
    const data = await Product.find({});

    res.json(data);
  })
);

adminRouter.post(
  "/edit/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const values = req.body;

    const product = await Product.findById(id);

    if (product) {
      product.name = values.name;
      product.price = values.price;
      product.category = product.category;
    }
    const updatedProduct = await product.save();

    res.json(updatedProduct);
  })
);

adminRouter.post(
  "/addproduct",
  asyncHandler(async (req, res) => {
    const values = req.body;

    const product = new Product(values);

    const createdProduct = product.save();

    res.json(createdProduct);
  })
);

module.exports = adminRouter;
