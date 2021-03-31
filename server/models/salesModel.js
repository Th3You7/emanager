const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    soldPrice: { type: Number, required: true },
    size: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
