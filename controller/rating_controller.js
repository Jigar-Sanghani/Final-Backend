const Rating = require("../models/rating_schema");



const getratingbyproductid = async (req, res) => {
    try {
        const { productId } = req.params;
        let rating = await Rating.find({ product: productId });
        res.send(rating);
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const createrating = async (req, res) => {
    try {
        req.body.user = req.user.id;
        let rating = await Rating.create(req.body);
        res.send(rating);
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const updaterating = async (req, res) => {
    let { ratingId } = req.params;
    try {
        let rating = await Rating.findByIdAndUpdate(ratingId, req.body, {
            new: true,
        });
        res.send(rating);
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const deleterating = async (req, res) => {
    let { ratingId } = req.params;

    try {
        let rating = await Rating.findByIdAndDelete(ratingId);
        res.send(rating);
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

module.exports = { getratingbyproductid, createrating, updaterating, deleterating };