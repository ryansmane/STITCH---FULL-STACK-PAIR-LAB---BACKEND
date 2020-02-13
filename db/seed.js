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

            Shirt.create({
               brand: 'BERTIGO',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/NORMAN-92_2000x.jpg?v=1571438876'
            });
            Shirt.create({
               brand: 'BERTIGO',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/PAZ-92_2000x.jpg?v=1571438876'
            });
            Shirt.create({
               brand: 'EIGHT-X',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/M19103-960-2_2000x.jpg?v=1579458858'
            });
            Pants.create({
               brand: 'AU NOIR',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_wine_1603_2000x.jpg?v=1571438882'
            });
            Pants.create({
               brand: 'AU NOIR',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/WALTER_stone_1863_2000x.jpg?v=1571438882'
            });
            Pants.create({
               brand: 'AU NOIR',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_charcoal_1596_2000x.jpg?v=1571438861'
            });
            Jacket.create({
               brand: 'BERTIGO',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/MONTELLA-521_2000x.jpg?v=1571438876'
            });
            Jacket.create({
               brand: 'BERTIGO',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/PRESTON-1812_2eed8e3a-5295-41f3-95bf-83b66ea6f849_2000x.jpg?v=1571438877'
            });
            Jacket.create({
               brand: 'BERTIGO',
               image:
                  'https://cdn.shopify.com/s/files/1/0115/5332/products/PRESTON-92_2000x.jpg?v=1571438876'
            });
            Outfit.create({
               name: 'Test outfit',
               shirt: {
                  brand: 'EIGHT-X',
                  image:
                     'https://cdn.shopify.com/s/files/1/0115/5332/products/M19103-960-2_2000x.jpg?v=1579458858'
               },
               pants: {
                  brand: 'AU NOIR',
                  image:
                     'https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_charcoal_1596_2000x.jpg?v=1571438861'
               },
               jacket: {
                  brand: 'BERTIGO',
                  image:
                     'https://cdn.shopify.com/s/files/1/0115/5332/products/PRESTON-92_2000x.jpg?v=1571438876'
               }
            });
         });
      });
   });
});
