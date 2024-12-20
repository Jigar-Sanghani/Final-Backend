
const { Router } = require("express");
const { getProductById, getProducts, createProduct, updateProduct, deleteProduct } = require("../controller/product_controller");
const { decode } = require("../middlewares/decodejwt");
const upload = require("../utils/img_upload");

const productRoute = Router();

productRoute.get("/", getProducts);
productRoute.get("/:productId", getProductById);
productRoute.post("/create", decode, upload.single("img"), createProduct);
productRoute.patch("/update:productId", decode, updateProduct);
productRoute.delete("/delete:productId", decode, deleteProduct);

module.exports = productRoute;
