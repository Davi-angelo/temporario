const xkcdController = require("../controllers/xkcdController");
const router = require("express").Router();

router.get("/", xkcdController.getLatestComic);
router.get("/:id", xkcdController.getComicById);

module.exports = router;
