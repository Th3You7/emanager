const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, set: (v) => v.toLowerCase() },
    storeName: { type: String, set: (v) => v.toLowerCase() },
    email: { type: String, required: true },
    password: { type: String, required: true },
    img: {
      profile: { url: { type: String }, public_id: { type: String } },
      cover: { url: { type: String }, public_id: { type: String } },
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
