const express = require("express");
const adminRouter = express.Router();
const asyncHandler = require("express-async-handler");
const { uploader } = require("../cloudinary");
const Admin = require("../models/adminModel");
const Product = require("../models/productModel");
const {
  upload,
  bufferToUri,
  adminProfileUpload,
  adminCoverUpload,
} = require("../multer");

adminRouter.get(
  "/allproducts",
  asyncHandler(async (req, res) => {
    const data = await Product.find({});

    res.json(data);
  })
);

//*adding admin profile image
adminRouter.post(
  "/upload/adminimg",
  adminProfileUpload,
  asyncHandler(async (req, res) => {
    if (req.file.originalname) {
      const file = bufferToUri(req).content;
      const { public_id } = req.body;

      uploader
        .upload(file, public_id ? { public_id } : {})
        .then((result) =>
          res.json({
            imageUrl: result.url,
            originalname: req.file.originalname,
            public_id: result.public_id,
          })
        )
        .catch((err) => res.status(400).json(err));
    }
  })
);

//*adding admin profile cover
adminRouter.post(
  "/upload/admincover",
  adminCoverUpload,
  asyncHandler(async (req, res) => {
    if (req.file.originalname) {
      const file = bufferToUri(req).content;
      const { public_id } = req.body;

      uploader
        .upload(file, public_id ? { public_id } : {})
        .then((result) =>
          res.json({
            imageUrl: result.url,
            originalname: req.file.originalname,
            public_id: result.public_id,
          })
        )
        .catch((err) => res.status(400).json(err));
    }
  })
);

//* delete img
adminRouter.delete(
  "/upload/deleteimg",
  upload,
  asyncHandler(async (req, res) => {
    const { img } = req.body;
    if (img) {
      uploader.destroy(img, (result, error) => {
        if (error) res.status(400).send(error);

        res.send(result);
      });
    }
  })
);

//*editing admin profile
adminRouter.put(
  "/editProfile",
  asyncHandler(async (req, res) => {
    const { storeName, name, id, img } = req.body;

    const admin = await Admin.findById(id);

    try {
      admin.name = name;
      admin.storeName = storeName;

      if (img && img.profile) {
        const {
          profile: { url, public_id },
        } = img;

        admin.img.profile.url = url;
        admin.img.profile.public_id = public_id;
      }
      if (img && img.cover) {
        const {
          cover: { url, public_id },
        } = img;

        admin.img.cover.url = url;
        admin.img.cover.public_id = public_id;
      }

      const updatedAdmin = await admin.save();

      res.json(updatedAdmin);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//* getting admin profile infos
adminRouter.get(
  "/getProfile",
  asyncHandler(async (req, res) => {
    const admin = await Admin.find({});
    res.json(admin[0]);
  })
);

//*adding products infos
adminRouter.post(
  "/addproduct",
  asyncHandler(async (req, res) => {
    const values = req.body;
    const { availableSize, availableSizeValue, img } = values;
    const data = {
      name: values.name,
      category: values.category.value,
      price: values.price,
      img: {
        url: img.url,
        public_id: img.public_id,
      },
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

//* adding product image
adminRouter.post(
  "/upload/addimg",
  upload,
  asyncHandler(async (req, res) => {
    if (req.file.originalname) {
      const file = bufferToUri(req).content;
      const { public_id } = req.body;

      uploader
        .upload(file, public_id ? { public_id } : {})
        .then((result) => {
          res.json({
            imageUrl: result.url,
            originalname: req.file.originalname,
            public_id: result.public_id,
          });
        })
        .catch((err) => res.status(400).json(err));
    }
  })
);

//* deleting a product
adminRouter.delete(
  "/delete/:id",
  upload,
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    try {
      uploader.destroy(
        new String(product.img.public_id),
        { invalidate: true, resource_type: "image", type: "upload" },
        (result, error) => {
          const deletedProduct = product.remove();

          res.json(deletedProduct);
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//*editing a product infos
adminRouter.put(
  "/edit/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const values = req.body;
    const { availableSize, availableSizeValue, img } = values;
    const product = await Product.findById(id);
    try {
      product.name = values.name;
      product.price = values.price;
      product.category = values.category.value;
      product.img.url = img.url;
      product.img.public_id = img.public_id;
      product.availableSizes = availableSize.reduce((acc, curr, i) => {
        if (availableSizeValue[i] !== undefined) {
          acc[curr.value] = Number(availableSizeValue[i].value);
        }
        return acc;
      }, {});

      const updatedProduct = await product.save();

      res.json(updatedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);
module.exports = adminRouter;
