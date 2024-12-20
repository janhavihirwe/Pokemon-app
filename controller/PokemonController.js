const axios = require('axios');

const getPokemonList = async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const detailedPokemon = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          id: details.data.id,
          name: details.data.name,
          sprite: details.data.sprites.front_default,
          types: details.data.types.map((type) => type.type.name),
        };
      })
    );

    res.json(detailedPokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokemon data', error });
  }
};

module.exports = { getPokemonList };
