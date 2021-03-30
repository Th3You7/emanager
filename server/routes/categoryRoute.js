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

categoryRouter.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    const deletedCategory = category.remove();
    res.json(deletedCategory);
  })
);

module.exports = categoryRouter;
