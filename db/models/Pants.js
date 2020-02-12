const mongoose = require('../connection');

const PantsSchema = new mongoose.Schema({
   brand: String,
   image: String
});

const Pants = mongoose.model('Pants', PantsSchema);

module.exports = Pants;
