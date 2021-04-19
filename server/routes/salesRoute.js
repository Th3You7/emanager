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
    const sales = await Sales.insertMany(data);

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

    //remove duplicate
    const remDup = data.reduce((acc, curr) => {
      if (acc.filter((x) => x._id === curr._id).length === 0) acc.push(curr);
      return acc;
    }, []);

    //collect all sizes in one object
    const size = remDup.map((x) => {
      let obj = { _id: x._id };
      data.forEach((v) => {
        if (v._id === x._id) {
          if (obj.hasOwnProperty(v.size)) {
            obj[v.size] = obj[v.size] + 1;
          } else {
            obj[v.size] = 1;
          }
        }
      });
      return obj;
    });

    //map over all products, and substract the sizes of sales
    const arr = remDup.map(async (x) => {
      const product = await Product.findById(x._id);
      product.availableSizes = {
        ...product.availableSizes,
        ...size.reduce((acc, curr) => {
          if (`${product._id}` === curr._id) {
            Object.keys(product.availableSizes).forEach((key) => {
              if (curr.hasOwnProperty(key))
                acc[key] = product.availableSizes[key] - curr[key];
            });
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
