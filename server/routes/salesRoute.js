const express = require("express");
const salesRouter = express.Router();

const asyncHandler = require("express-async-handler");

const Sales = require("../models/salesModel");

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

module.exports = salesRouter;
