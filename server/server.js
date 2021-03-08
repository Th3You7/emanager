const express = require("express");
const { storeRouter } = require("./routes/store");

const app = express();

app.use("/", storeRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running  http://localhost:${port}`);
});
