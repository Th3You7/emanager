const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");
const expressAsyncHandler = require("express-async-handler");

authRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ email });

      //validate email
      if (!admin) res.status(400).send({ message: "email is not correct" });
      //validate password
      const validatePass = bcrypt.compareSync(password, admin.password);

      if (!validatePass)
        res.status(401).send({ message: "password is not correct" });

      //token

      const token = jwt.sign({ email, id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(200).send({
        _id: admin._id,
        name: admin.name,
        storeName: admin.storeName,
        img: admin.img,
        token,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

authRouter.post(
  "/create",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    const hashed = await bcrypt.hash(password, 12);

    const newUser = new Admin({ email, password: hashed });

    const saved = await newUser.save();

    res.json(saved);
  })
);

module.exports = authRouter;
