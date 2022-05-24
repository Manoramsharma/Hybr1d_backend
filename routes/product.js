const express = require("express");
const router = express.Router();
const Controller = require("../controllers/productCtrl");
const auth = require("../middlewares/auth");
const isSeller = require("../middlewares/isSeller");
const Product = require("../models/product");

router.post("/seller/create-catalog", auth, isSeller, Controller.uploadProduct);
router.delete("/posts/:id", auth, Controller.deleteProduct);
router.post("/like/:id", auth, Controller.likeProduct);
router.post("/unlike/:id", auth, Controller.unlikeProduct);
router.get("/buyer/seller-catalog/:id", auth, Controller.getProductById);
router.get("/all_posts", auth, Controller.getAllProducts);

router.post("/addtocart/:id", auth, Controller.addToCart);
router.get("/cart", auth, Controller.getCart);

module.exports = router;
