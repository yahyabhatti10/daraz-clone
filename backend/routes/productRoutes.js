const express = require("express")
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category")

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const products = await Product.find({ category: categoryId });
    const category = await Category.findById(categoryId)
    res.json({
        category: category.name,
        products: products
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;