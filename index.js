"use strict";

const path = require("path");

const express = require("express");
const bodyparser = require('body-parser');
const {TodoRouter } = require('./routes/todo');

const { App } = require('./config');

const dotenv = require('dotenv');



const app = express();

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

console.log("config", process.env.PORT);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/todo',TodoRouter);

app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Todo Applications",
  });
});
app.get("/login", (req, res) => {
  res.send("This is our login page");
});
app.listen(App.PORT, () => {
  console.log(`Listening on Port ${App.PORT}`);
});





