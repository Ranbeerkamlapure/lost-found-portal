const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();
const PORT = 8080;

// view engine
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/lostfound")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
});

// routes
const itemRoutes = require("./routes/items");
app.use("/", itemRoutes);

// server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});