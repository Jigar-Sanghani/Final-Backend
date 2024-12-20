const express = require('express');
const dbconnect = require('./config/db');
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const { userRouter } = require('./routers/user_router');
const productRoute = require('./routers/product_router');
const { CommentRouter } = require('./routers/comment_router');
const cartRoute = require('./routers/cart_router');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
    res.status(200).json({ msg: "hello node js" });
});


app.use("/user", userRouter)
app.use("/products", productRoute)
app.use("/comments", CommentRouter)
app.use("/cart",cartRoute)


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT} !!`);
    dbconnect()
});