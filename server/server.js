const express = require("express");
const { storeRouter } = require("./routes/storeRoute");
const { productRouter } = require("./routes/productRoute");
const app = express();

app.use("/", storeRouter);
app.use("/product", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running  http://localhost:${port}`);
});
