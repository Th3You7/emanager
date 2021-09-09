const express = require("express");
const invoiceRouter = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Invoice = require("../models/invoiceModel");
const { sumObjectsByKey } = require("../utils");

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
          return {
            product: x.name,
            productId: x._id,
            unitPrice: x.soldPrice,
            sizes: x.size,
          };
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

invoiceRouter.delete(
  "/:invoiceid/remove",
  asyncHandler(async (req, res) => {
    const { invoiceid } = req.params;
    try {
      const invoice = await Invoice.findById(invoiceid);

      const { products } = invoice;

      //! restore sizes to the product stocks
      products.map(async (x) => {
        const { productId, sizes } = x;

        const product = await Product.findById(productId);

        product.availableSizes = {
          ...product.availableSizes,
          ...sumObjectsByKey(product.availableSizes, sizes),
        };

        await product.save();
      });

      //!remove the invoice;
      const deletedInvoice = invoice.delete();

      res.json(deletedInvoice);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

module.exports = invoiceRouter;
