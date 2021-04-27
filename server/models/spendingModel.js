const mongoose = require("mongoose");

const spendingSchema = new mongoose.Schema(
  {
    spending: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

const Spending = mongoose.model("Spending", spendingSchema);

module.exports = Spending;
