const product = require('../models/Product');



exports.index = async (req, res) => {
    const products = await product.find()
    res.json(products);
};



exports.show = async (req, res) => {
    const products = await product.findById(req.params.id);
    return products ? res.json(products) : res.status(404).json({ message: "not found" });
};


exports.store = async (req, res) => {
    const data = {
        title: req.body.title,
        description : req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.path,

    };
    const products = await product.create(data);
    return res.json(products);
};


exports.update = async (req, res) => {
    const data = {
        title: req.body.title,
        description : req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.path,
    }
    const products = await product.findByIdAndUpdate(req.params.id, data, { new: true });
    return products ? res.json(products) : res.json.status(404).json({ message: "not found" });
};

exports.delete = async (req, res) => {
    const products = await product.findByIdAndDelete(req.params.id)
    return products ? res.send("delete secc") : res.json.status(404).json({ message: "not found" });
};