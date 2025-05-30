const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Email", emailSchema);
