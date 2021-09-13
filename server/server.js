const express = require("express");
const storeRouter = require("./routes/storeRoute");
const productRouter = require("./routes/productRoute");
const adminRouter = require("./routes/adminRoute");
const categoryRouter = require("./routes/categoryRoute");
const salesRouter = require("./routes/salesRoute");
const spendingRouter = require("./routes/spendingRouter");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const app = express();

const { cloudinaryConfig } = require("./cloudinary");
const loanRouter = require("./routes/loanRoute");
const auth = require("./middleware/auth");
const authRouter = require("./routes/authRouter");
const invoiceRouter = require("./routes/invoiceRouter");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("*", cloudinaryConfig);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/api/store", auth, storeRouter);
app.use("/api/product", auth, productRouter);
app.use("/api/admin", auth, adminRouter);
app.use("/api/category", auth, categoryRouter);
app.use("/api/sales", auth, salesRouter);
app.use("/api/spending", auth, spendingRouter);
app.use("/api/loan", auth, loanRouter);
app.use("/api/auth", authRouter);
app.use("/api/invoice", auth, invoiceRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
