const express = require("express");
const invoiceRouter = express.Router();
const asyncHandler = require("express-async-handler");
const Invoice = require("../models/invoiceModel");

invoiceRouter.get(
  "/allInvoices",
  asyncHandler(async (req, res) => {
    const invoices = await Invoice.find({});

    res.json(invoices);
  })
);

invoiceRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { total, client, products, paymentMethod, advance } = req.body;

    const data = {
      paymentMethod,
      advance,
      client,
      products: [
        ...products.map((x) => {
          return { product: x.name, unitPrice: x.soldPrice, sizes: x.size };
        }),
      ],
      total,
    };

    try {
      const invoice = new Invoice(data);
      const result = await invoice.save();
      res.send(result);
    } catch (error) {
      res.status(400).send({ error });
    }
  })
);

module.exports = invoiceRouter;
