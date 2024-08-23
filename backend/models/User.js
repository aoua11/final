const mongoose = require('mongoose');

module.exports = mongoose.model("User" ,mongoose.Schema({
    name : String , 
    number : String,
    email : String , 
    password : String,
    image : String , 
}))