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

module.exports = categoryRouter;
