const express = require('express');
const Outfit = require('../db/models/Outfit');

const router = express.Router();

router.get('/', (req, res) => {
   Outfit.find().then(outfits => res.json(outfits));
});

router.get('/:name', (req, res) => {
    Outfit.find({name: req.params.name}).then(outfit => res.json(outfit))
})

router.post('/', (req, res) => {
    Outfit.create(req.body).then(outfit => res.json(outfit))
})

router.put('/:id', (req, res) => {
    Outfit.findByIdAndUpdate(req.params.id, {name:req.body.name}, {new:true}).then(outfit => res.json(outfit))
})

router.delete('/:id', (req, res) => {
    Outfit.findByIdAndDelete(req.params.id).then(deleted => res.json(deleted))
})



module.exports = router;
