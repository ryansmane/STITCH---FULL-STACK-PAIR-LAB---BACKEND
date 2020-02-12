const Shirt = require('../db/models/Shirt');
const Pants = require('../db/models/Pants');
const Jacket = require('../db/models/Jacket');
const Outfit = require('../db/models/Outfit');

Shirt.deleteMany({}).then(() => {
   console.log('shirts gone');
   Pants.deleteMany({}).then(() => {
      console.log('pants gone');
      Jacket.deleteMany({}).then(() => {
         console.log('jackets gone');
         Outfit.deleteMany({}).then(() => {
            console.log('outfits gone');
         });
      });
   });
   Shirt.create(
       {
           brand: ""
       }
   )
});
