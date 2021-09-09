const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceId: { type: String, required: true, default: 0 },
  date: { type: Date, default: Date.now },
  client: {
    name: { type: String, require: true, set: (v) => v.toLowerCase() },
    adress: { type: String },
  },

  products: [
    {
      product: { type: String, required: true },
      productId: { type: String, required: true },
      unitPrice: { type: Number, required: true },
      sizes: { type: Object, required: true },
    },
  ],

  paymentMethod: { type: String, required: true },
  total: { type: Number, required: true },
  advance: { type: Number },
});

const counterSchema = new mongoose.Schema({
  _id: { type: "string", default: "id" },
  seq: { type: Number },
});

const Counter = mongoose.model("Counter", counterSchema);

//* generating increment for invoice id using a sample counter
invoiceSchema.pre("save", async function (next) {
  try {
    const counter = await Counter.findOneAndUpdate(
      { _id: "id" },
      { $inc: { seq: 1 } },
      {
        new: true,
        upsert: true, // Make this update into an upsert
      }
    );

    const d = new Date();
    const n = d.getFullYear();

    this.invoiceId = `${counter.seq}/${n}`;
    next();
  } catch (error) {
    return next(error);
  }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
