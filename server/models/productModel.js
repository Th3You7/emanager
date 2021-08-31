const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true, set: (v) => v.toLowerCase() },
    price: { type: Number, required: true },
    img: {
      url: { type: String, require: true },
      public_id: { type: String, required: true },
    },
    availableSizes: { type: Object, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
