const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  onSale: { type: Boolean, default: false },
  reviewsCount: { type: Number, default: 0 },
  description: { type: String },
  img: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
});

module.exports = mongoose.model("Product", productSchema);
