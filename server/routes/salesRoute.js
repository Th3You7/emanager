const express = require("express");
const salesRouter = express.Router();

const asyncHandler = require("express-async-handler");

const Sales = require("../models/salesModel");
const Product = require("../models/productModel");

salesRouter.get(
  "/all",
  asyncHandler(async (req, res) => {
    const sales = await Sales.find({});

    res.json(sales);
  })
);

salesRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    const data = req.body;
    const insert = data.map((x) => {
      return {
        name: x.name,
        category: x.category,
        price: x.price,
        soldPrice: x.soldPrice,
        size: x.size,
        qty: Object.keys(x.size).length,
      };
    });
    const sales = await Sales.insertMany(insert);

    res.json(sales);
  })
);

salesRouter.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const sale = await Sales.findById(id);
    const deletedSale = sale.remove();

    res.json(deletedSale);
  })
);

salesRouter.put(
  "/confirm",
  asyncHandler(async (req, res) => {
    const data = req.body;

    //*map over all products, and substract the sizes of sales
    const arr = data.map(async (x) => {
      const product = await Product.findById(x._id);
      product.availableSizes = {
        ...product.availableSizes,
        ...Object.keys(product.availableSizes).reduce((acc, curr) => {
          if (x.size.hasOwnProperty(curr)) {
            acc[curr] = product.availableSizes[curr] - x.size[curr];
          }

          return acc;
        }, {}),
      };

      const confirm = await product.save();

      return confirm;
    });
    Promise.all(arr)
      .then((result) => res.json(result))
      .catch((err) => res.status(404).send(err));
  })
);

module.exports = salesRouter;
