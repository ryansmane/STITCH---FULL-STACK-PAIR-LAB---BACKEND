const express = require('express');
const Pants = require('../db/models/Pants');

const router = express.Router();

router.get('/', (req, res) => {
   Pants.find().then(pants => res.json(pants));
});

module.exports = router;
