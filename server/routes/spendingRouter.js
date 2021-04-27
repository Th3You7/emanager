const Spending = require("../models/spendingModel");
const asyncHandler = require("express-async-handler");
const express = require("express");
const spendingRouter = express.Router();

spendingRouter.get(
  "/all",
  asyncHandler(async (req, res) => {
    const data = await Spending.find({});

    res.send(data);
  })
);

spendingRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    const data = {
      spending: req.body.withdraw,
      comment: req.body.comment,
    };

    const spending = new Spending(data);

    const result = await spending.save();

    res.send(result);
  })
);

spendingRouter.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const spending = await Spending.findById(id);

    const deletedSpending = await spending.remove();

    res.json(deletedSpending);
  })
);

module.exports = spendingRouter;
