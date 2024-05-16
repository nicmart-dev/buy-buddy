const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
    res.send("Welcome to BuyBuddy API!");
});

router.get("/shopping-list", (req, res) => {
    const shoppingList = fs.readFileSync("./data/shopping-list.json");
    res.send(JSON.parse(shoppingList));
});


module.exports = router;
