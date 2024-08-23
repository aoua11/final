const mongoose = require('mongoose');

 module.exports = mongoose.model('order' , mongoose.Schema({
    name: String,
  address: String,
  phone: String,
 }))