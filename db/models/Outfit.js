const mongoose = require('../connection');

const OutfitSchema = new mongoose.Schema({
   shirt: {
      brand: String,
      image: String
   },
   pants: {
      brand: String,
      image: String
   },
   jacket: {
      brand: String,
      image: String
   }
});

const Outfit = mongoose.model('Outfit', OutfitSchema);

module.exports = Outfit;
