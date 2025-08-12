const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/Category");
const Product = require("./models/Product");
const data = require("./data/data.js"); 

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedData = async () => {
  try {

    await Category.deleteMany();
    await Product.deleteMany();

    console.log("delete old data");

    for (const categoryKey in data) {
      if (data.hasOwnProperty(categoryKey)) {
        const categoryData = data[categoryKey];

        const newCategory = await Category.create({
          name: categoryData.name,
          img: categoryData.img
        });

        const products = categoryData.products.map(product => ({
          name: product.name,
          discountedPrice: product.discountedPrice,
          originalPrice: product.originalPrice,
          onSale: product.onSale,
          reviewsCount: product.reviewsCount,
          description: product.description,
          img: product.img, 
          category: newCategory._id
        }));

        await Product.insertMany(products);

        console.log(`Inserted category: ${categoryData.name} with ${products.length} products`);
      }
    }

    console.log("all data inserted");
    process.exit();
  } catch (err) {
    console.error("data not inserted", err);
    process.exit(1);
  }
};

seedData();
