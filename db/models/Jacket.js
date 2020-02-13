const mongoose = require('../connection');

const JacketSchema = new mongoose.Schema({
   brand: {type: String, required: true},
   image: { type: String, required: true }
});

const Jacket = mongoose.model('Jacket', JacketSchema);

module.exports = Jacket;
