const axios = require("axios");

const xkcdModel = {
    getComic: async (comicNumber) => {
        const response = await axios.get(
            `https://xkcd.com/${comicNumber}/info.0.json`,
        );
        return response.data;
    },
    getLatestComic: async () => {
        const response = await axios.get("https://xkcd.com/info.0.json");
        return response.data;
    },
};

module.exports = xkcdModel;
