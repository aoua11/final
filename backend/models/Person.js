const mongoose = require('mongoose');


module.exports = mongoose.model('Person', mongoose.Schema({

    firstname: String,
    secondename: String,
    username: String,
    date: Date,
    image: String
}))