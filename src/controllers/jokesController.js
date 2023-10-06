const jokes = require("../models/jokesModel");

const getJokeById = async (req, res) => {
    try {
        const joke = await jokes.getJoke(req.params.id);
        res.json(joke)        
    } catch (err) {
        res.status(500).json({message: err.message })
    }
};

const getRandomJoke = async (req, res) => {
    try {
        const randomJoke = await jokes.getRandomJoke();
        res.json(randomJoke);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getJokeById,
    getRandomJoke,
};
