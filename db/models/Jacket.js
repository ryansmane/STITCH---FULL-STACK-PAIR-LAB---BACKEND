const mongoose = require('../connection');

const JacketSchema = new mongoose.Schema({
   brand: String,
   image: String
});

const Jacket = mongoose.model('Jacket', JacketSchema);

module.exports = Jacket;
