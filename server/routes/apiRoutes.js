const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
    res.send("Welcome to BuyBuddy API!");
});

router.post("/shopping-list", (req, res) => {
    try {
        const shoppingList = JSON.parse(fs.readFileSync("./data/shopping-list.json"));
        const newItemId = uuidv4();

        const newItem = {
            id: newItemId,
            name: req.body.name,
            quantity: req.body.quantity
        };
        shoppingList.push(newItem);
        fs.writeFileSync("./data/shopping-list.json");
        res.json({
            message: "Item added to shopping list successfully",
            item: newItem
        });
    } catch (error) {
        console.error("Error adding");
        res.status(500).json({ error: "Internal server error" });
    }
    });


router.get("/shopping-list", (req, res) => {
    const shoppingList = fs.readFileSync("./data/shopping-list.json");
    res.send(JSON.parse(shoppingList));
});


module.exports = router;
