const express = require('express');
const Jacket = require('../db/models/Jacket');


const router = express.Router();

router.get('/', (req, res) => {
    Jacket.find().then(jackets => res.json(jackets) )
})

module.exports = router
