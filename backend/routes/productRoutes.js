const express = require("express")
const router = express.Router();
const {getProducts, getProductsByCategoryId} = require("../controllers/productController")

router.get("/", getProducts);
router.get("/:categoryId", getProductsByCategoryId);

module.exports = router;