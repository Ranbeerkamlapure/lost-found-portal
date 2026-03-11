const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// show all items
router.get("/items", async (req, res) => {
    const items = await Item.find({});
    res.render("index", { items });
});

// form to add item
router.get("/items/new", (req, res) => {
    res.render("new");
});

// create item
router.post("/items", async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.redirect("/items");
});

// show single item
router.get("/items/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("show", { item });
});

// delete item
router.delete("/items/:id", async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect("/items");
});

module.exports = router;