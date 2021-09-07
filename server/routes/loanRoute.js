const express = require("express");
const Loans = require("../models/loanModel");
const loanRouter = express.Router();
const asyncHandler = require("express-async-handler");
const { uploader } = require("../cloudinary");
const { bufferToUri, profileUpload, coverUpload } = require("../multer");

//*getting all loan profiles
loanRouter.get(
  "/all",
  asyncHandler(async (req, res) => {
    const loan = await Loans.find({});

    res.json(loan);
  })
);

//*adding profile img for loan
loanRouter.post(
  "/upload/addprofile",
  profileUpload,
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

//*adding cover img for loan
loanRouter.post(
  "/upload/addcover",
  coverUpload,
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

//* getting a set profile
loanRouter.get(
  "/:profileid",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

//* getting loan payments
loanRouter.get(
  "/:profileid/payments",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

//*adding a loan payment
loanRouter.post(
  "/:profileid/payments/add",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;

    const { payment } = req.body;

    try {
      const profile = await Loans.findById(profileid);
      profile.payments = [{ payment }, ...profile.payments];

      const updatedProfile = await profile.save();

      res.json(updatedProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//*removing a loan payment
loanRouter.delete(
  "/:profileid/payments/remove",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const { paymentId } = req.body;
    try {
      const profile = await Loans.findById(profileid);
      const filtredArr = profile.payments.filter((x) => x._id != paymentId);

      profile.payments = filtredArr;

      const updatedProfile = await profile.save();

      res.json(updatedProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//* geeting products of a loan profile
loanRouter.get(
  "/:profileid/products",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

//* adding loan profile products
loanRouter.post(
  "/:profileid/addproducts",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const { products } = req.body;

    try {
      const profile = await Loans.findById(profileid);

      profile.products = [
        ...products.map((x) => {
          return {
            product: x.name,
            productId: x._id,
            unitPrice: x.soldPrice,
            sizes: x.size,
          };
        }),
        ...profile.products,
      ];

      const updatedProfile = await profile.save();

      res.json(updatedProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//* removing loan profile products
loanRouter.delete(
  "/:profileid/removeProducts",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const { products } = req.body;

    try {
      const profile = await Loans.findById(profileid);

      const updatedProfileProduct = profile.products.filter(
        (x) => x._id != products._id
      );

      profile.products = updatedProfileProduct;

      const updatedProfile = await profile.save();

      res.json(updatedProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//*adding loan profile
loanRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    const { img, name, phone } = req.body;
    console.log(img, name);
    try {
      const profile = new Loans({ img, name, phone });
      const createdProfile = await profile.save();

      res.json(createdProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//*editing loan profile
loanRouter.post(
  "/:profileid/edit",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const { img, name } = req.body;

    const profile = await Loans.findById(profileid);

    try {
      profile.name = name;
      if (img && img.profile) {
        const {
          profile: { url, public_id },
        } = img;

        profile.img.profile.url = url;
        profile.img.profile.public_id = public_id;
      }

      if (img && img.cover) {
        const {
          cover: { url, public_id },
        } = img;

        profile.img.cover.url = url;
        profile.img.cover.public_id = public_id;
      }

      const updatedProfile = await profile.save();

      res.json(updatedProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

//*deleting loan profile
loanRouter.delete(
  "/:profileid/delete",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;

    const profile = await Loans.findById(profileid);

    const deletedProfile = profile.remove();

    res.send(deletedProfile);
  })
);

module.exports = loanRouter;
