const xkcd = require("../models/xkcdModel");

const getLatestComic = async (req, res) => {
    try {
        const latestComic = await xkcd.getLatestComic();
        res.status(200).json(latestComic);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getComicById = async (req, res) => {
    try {
        const comic = await xkcd.getComic(req.params.id);
        res.status(200).json(comic);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getLatestComic,
    getComicById,
};
