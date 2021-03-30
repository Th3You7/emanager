const express = require("express");
const categoryRouter = express.Router();
const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");

categoryRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});

    res.json(categories);
  })
);

categoryRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    const { name } = req.body;

    const data = { name };

    const category = new Category(data);

    const result = await category.save();

    res.json(result);
  })
);

module.exports = categoryRouter;
