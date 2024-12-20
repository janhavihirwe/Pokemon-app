const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sprite: String,
  types: [String],
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
