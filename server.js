const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("It's working!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is running on port ${port}`));
