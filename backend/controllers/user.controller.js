const user = require("../models/User");



exports.index = async (req, res) => {
    const users = await user.find()
    res.json(users);
};



exports.show = async (req, res) => {
    const users = await product.findById();
    return users ? res.json(users) : res.status(404).json({ message: "not found" });
};


exports.store = async (req, res) => {
    const data = {
        name: req.body.name,
        number:req.body.number,
        email: req.body.email,
        password: req.body.password,
        image: req.file.path,

    };
    const users = await user.create(data)
    return users ? res.json(users) : res.json.status(404).json({ message: "not found" });
};


exports.update = async (req, res) => {
    const data = {
        naem: req.body.name,
        number : req.body.number,
        email: req.body.email,
        password: req.body.password,
        image: req.file.path,
    }
    const users = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return users ? res.json(users) : res.json.status(404).json({ message: "not found" });
};

exports.delete = async (req, res) => {
    const users = await user.findByIdAndDelete(req.params.id)
    return users ? res.send("delete secc") : res.json.status(404).json({ message: "not found" });
};