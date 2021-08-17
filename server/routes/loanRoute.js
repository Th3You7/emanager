const express = require("express");
const Loans = require("../models/loanModel");
const loanRouter = express.Router();
const asyncHandler = require("express-async-handler");
const { uploader } = require("../cloudinary");
const { bufferToUri, profileUpload, coverUpload } = require("../multer");

loanRouter.get(
  "/all",
  asyncHandler(async (req, res) => {
    const loan = await Loans.find({});

    res.json(loan);
  })
);

loanRouter.get(
  "/:profileid",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

loanRouter.get(
  "/:profileid/products",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

loanRouter.get(
  "/:profileid/payments",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const data = await Loans.findById(profileid);
    res.json(data);
  })
);

loanRouter.post(
  "/upload/addprofile",
  profileUpload,
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

loanRouter.post(
  "/upload/addcover",
  coverUpload,
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

loanRouter.post(
  "/:profileid/edit",
  asyncHandler(async (req, res) => {
    const { profileid } = req.params;
    const values = req.body;

    const profile = await Loans.findById(profileid);

    if (profile) {
      profile.name = values.name;
      profile.cover = values.cover;
      profile.profile = values.profile;
    }

    const updatedProfile = await profile.save();

    res.json(updatedProfile);
  })
);

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
