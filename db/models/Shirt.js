const mongoose = require('../connection');

const ShirtSchema = new mongoose.Schema({
   brand: String,
   image: String
});

const Shirt = mongoose.model('Shirt', ShirtSchema);

module.exports = Shirt;
