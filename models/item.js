const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  contact: String,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", itemSchema);
