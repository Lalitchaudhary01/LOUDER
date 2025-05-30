const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const eventRoutes = require("./routes/eventRoutes");
const emailRoutes = require("./routes/emailRoutes");
const scheduler = require("./cron/scheduler");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/email", emailRoutes);

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected");
    scheduler(); // start the cron
  }
);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
