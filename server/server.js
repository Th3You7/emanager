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

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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

app.use("/api/store", storeRouter);
app.use("/api/product", productRouter);
app.use("/api/admin", adminRouter);
app.use("/api/category", categoryRouter);
app.use("/api/sales", salesRouter);
app.use("/api/spending", spendingRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
