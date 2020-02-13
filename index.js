const express = require('express');

const app = express();

const shirtsController = require('./controllers/shirtsController');
const pantsController = require('./controllers/pantsController');
const jacketController = require('./controllers/jacketController');
const outfitController = require('./controllers/outfitController');

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/shirts', shirtsController);
app.use('/pants', pantsController);
app.use('/jackets', jacketController);
app.use('/outfits', outfitController);

app.set('port', process.env.PORT || 7000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
