const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const connect=require("./config/db")
dotenv.config();

app.use(cors());
app.use(express.json());

const pokemonRoutes = require('./routes/PokemonRoutes');
app.use('/api/pokemon', pokemonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    try{
        await connect
        console.log(`Server running on port ${PORT} and Connected to database`)

    }
    catch(err){
        console.log("Error while connecting to database")
    }
});   
