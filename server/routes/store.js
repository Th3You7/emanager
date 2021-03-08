const express = require("express");
const storeRouter = express.Router();

const { data } = require("../data");

storeRouter.get("/store", (req, res) => {
  res.send(data.products);
});

exports.storeRouter = storeRouter;
