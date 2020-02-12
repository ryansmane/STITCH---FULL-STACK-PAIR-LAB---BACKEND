const express = require('express');
const Shirt = require('../db/models/Shirt');

const router = express.Router();

router.get('/', (req, res) => {
   Shirt.find().then(shirts => res.json(shirts));
});

module.exports = router;
