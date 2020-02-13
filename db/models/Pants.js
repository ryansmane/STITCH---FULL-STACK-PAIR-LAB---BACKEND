const mongoose = require('../connection');

const PantsSchema = new mongoose.Schema({
   brand: { type: String, required: true },
   image: { type: String, required: true }
});

const Pants = mongoose.model('Pants', PantsSchema);

module.exports = Pants;
