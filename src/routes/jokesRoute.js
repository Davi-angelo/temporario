const router = require("express").Router();
const jokesController = require("../controllers/jokesController");

router.get("/random", jokesController.getRandomJoke);
router.get("/:id", jokesController.getJokeById)

module.exports = router;
