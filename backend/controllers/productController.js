const Product = require("../models/Product");
const Category = require("../models/Category")

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const getProductsByCategoryId = async (req, res) => {
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
}

module.exports = {getProducts, getProductsByCategoryId}