const axios = require("axios");

const jokesModel = {
    getJoke: async (jokeNumber) => {
        const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${jokeNumber}`);
        return response.data;
    },

    getRandomJoke: async () => {
        const response = await axios.get(
            "https://official-joke-api.appspot.com/jokes/random",
        );
        return response.data;
    },
};

module.exports = jokesModel;
