const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password })

    if (!user) {
        return res.status(402).json({ message: "wrong email or password" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET)
    res.json({
        token

    });
};
