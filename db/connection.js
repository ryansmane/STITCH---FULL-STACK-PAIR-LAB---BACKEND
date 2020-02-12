const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stitch', {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
});

module.exports = mongoose;
