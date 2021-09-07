const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    set: (v) => v.toLowerCase(),
  },
  phone: {
    type: Number,
    unique: true,
  },
  img: {
    profile: { url: { type: String }, public_id: { type: String } },
    cover: { url: { type: String }, public_id: { type: String } },
  },
  payments: [
    {
      payment: { type: Number },
      time: { type: Date, default: Date.now },
    },
  ],
  products: [
    {
      product: { type: String, required: true },
      productId: { type: String, require: true },
      unitPrice: { type: Number, required: true },
      sizes: { type: Object, required: true },
      time: { type: Date, default: Date.now },
    },
  ],
});

const Loans = mongoose.model("Loans", loanSchema);

module.exports = Loans;
