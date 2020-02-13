const mongoose = require('mongoose');
let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/stitch';
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
