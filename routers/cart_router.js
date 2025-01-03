
const { Router } = require("express");
const { getCartByUserId, addToCart, removeFromCart, removeQuantity, addQuantity } = require("../controller/cart_controller");
const { decode } = require("../middlewares/decodejwt");
const cartRoute = Router();

cartRoute.get("/", decode, getCartByUserId);
cartRoute.post("/", decode, addToCart);
cartRoute.delete("/:cartId", decode, removeFromCart);
cartRoute.patch("/add-qty/:cartId", decode, addQuantity);
cartRoute.patch("/remove-qty/:cartId", decode, removeQuantity);

module.exports = cartRoute;
