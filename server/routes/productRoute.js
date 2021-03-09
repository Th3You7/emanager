const express = require("express");
const { data } = require("../data");
const productRouter = express.Router();

productRouter.get("/:id?", (req, res) => {
  const { id } = req.params;
  const product = data.products.filter((product) => product._id === Number(id));

  res.json(...product);
});

exports.productRouter = productRouter;
