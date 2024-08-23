const mongoose = require('mongoose');


module.exports = mongoose.model('Product', mongoose.Schema({

    title: String,
    description : String,
    price: Number,
    category: String,
    image : String
}))