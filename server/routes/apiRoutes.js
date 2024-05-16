const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
    res.send("Welcome to BuyBuddy API!");
});

router.get("/shopping-list", (req, res) => {
    const movies = fs.readFileSync("./data/shopping-list.json");
    res.send(JSON.parse(movies));
});


module.exports = router;
