const mongoose = require('../connection');

const ShirtSchema = new mongoose.Schema({
   brand: { type: String, required: true },
   image: { type: String, required: true }
});

const Shirt = mongoose.model('Shirt', ShirtSchema);

module.exports = Shirt;
