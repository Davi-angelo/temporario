const express = require("express");
const xkcdRoute = require("./routes/xkcdRoute");
const jokesRoute = require("./routes/jokesRoute");
const { join } = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use("/api/xkcd", xkcdRoute);
app.use("/api/jokes", jokesRoute);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
