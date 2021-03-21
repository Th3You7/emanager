const editRouter = require("express").Router();

const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

editRouter.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const values = req.body;

    const product = await Product.findByIdAndUpdate(id, values);

    if (product) {
      res.json(product);
    }
  })
);

module.exports = editRouter;
