const express = require('express');
const { getPokemonList } = require('../controller/PokemonController');

const router = express.Router();

router.get('/', getPokemonList);

module.exports = router;
