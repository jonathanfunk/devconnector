const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI; //Database Config

const app = express();

//Conntect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("It's working!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is running on port ${port}`));
