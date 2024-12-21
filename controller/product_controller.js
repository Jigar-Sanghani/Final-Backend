const Product = require("../models/product_schema");


const createProduct = async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Uploaded File:', req.file);

    if (req.file) {
        req.body.img = req.file.path;
    }

    req.body.user = req.user.id;

    try {
        let product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        console.error('Error while creating product:', error);
        res.status(500).send({ error: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

const getProductById = async (req, res) => {
    try {
        let { productId } = req.params;
        let product = await Product.findById(productId);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        let product = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
        });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        let product = await Product.findByIdAndDelete(productId);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, getProductById };
