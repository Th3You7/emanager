const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  profile: { type: String },
  cover: { type: String },
  payments: [
    {
      payment: { type: Number },
      time: { type: Date, default: Date.now },
    },
  ],
  products: [
    {
      product: { type: Number },
      time: { type: Date, default: Date.now },
    },
  ],
});

const Loans = mongoose.model("Loans", loanSchema);

module.exports = Loans;
