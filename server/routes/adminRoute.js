const express = require("express");
const adminRouter = express.Router();
const asyncHandler = require("express-async-handler");
const { uploader } = require("../cloudinary");
const Product = require("../models/productModel");
const { upload, bufferToUri } = require("../multer");

adminRouter.get(
  "/allproducts",
  asyncHandler(async (req, res) => {
    const data = await Product.find({});

    res.json(data);
  })
);

adminRouter.post(
  "/addproduct",
  asyncHandler(async (req, res) => {
    const values = req.body;
    const { availableSize, availableSizeValue } = values;
    const data = {
      name: values.name,
      category: values.category.value,
      price: values.price,
      imageUrl: values.imageUrl,
      availableSizes: availableSize.reduce((acc, curr, i) => {
        if (availableSizeValue[i] !== undefined) {
          acc[curr.value] = availableSizeValue[i].value;
        }

        return acc;
      }, {}),
    };

    const product = new Product(data);

    const createdProduct = await product.save();

    res.json(createdProduct);
  })
);

adminRouter.post(
  "/upload/addimg",
  upload,
  asyncHandler(async (req, res) => {
    if (req.file.originalname) {
      const file = bufferToUri(req).content;
      uploader
        .upload(file)
        .then((result) =>
          res.json({
            imageUrl: result.url,
            originalname: req.file.originalname,
          })
        )
        .catch((err) => res.status(400).json(err));
    }
  })
);

adminRouter.put(
  "/edit/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const values = req.body;
    const { availableSize, availableSizeValue } = values;
    const product = await Product.findById(id);
    if (product) {
      product.name = values.name;
      product.price = values.price;
      product.category = values.category.value;
      product.image = "hoddie.jpg";
      product.availableSizes = availableSize.reduce((acc, curr, i) => {
        if (availableSizeValue[i] !== undefined) {
          acc[curr.value] = Number(availableSizeValue[i].value);
        }
        return acc;
      }, {});
    }
    const updatedProduct = await product.save();

    res.json(updatedProduct);
  })
);

adminRouter.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    const deletedProduct = product.remove();

    res.json(deletedProduct);
  })
);

module.exports = adminRouter;
