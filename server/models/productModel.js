const mongoose = require("mongoose");

const quantity = (...arg) => {
  return this.price;
};

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true, set: (v) => v.toLowerCase() },
    price: { type: Number, required: true },
    availableSizes: { type: Object, required: true },
    quantity: { type: Object, set: quantity, default: 0, min: 0 },
  },
  { timestamps: true }
);

productSchema.set("toObject", { getters: true });
productSchema.set("toJSON", { getters: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
