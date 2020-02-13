const mongoose = require('../connection');

const OutfitSchema = new mongoose.Schema({
   name: String,
   shirt: {
      brand: { type: String, required: true },
      image: { type: String, required: true }
   },
   pants: {
      brand: { type: String, required: true },
      image: { type: String, required: true }
   },
   jacket: {
      brand: { type: String, required: true },
      image: { type: String, required: true }
   }
});

const Outfit = mongoose.model('Outfit', OutfitSchema);

module.exports = Outfit;
