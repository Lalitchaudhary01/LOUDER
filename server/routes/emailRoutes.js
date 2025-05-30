const express = require("express");
const router = express.Router();
const { saveEmail } = require("../controllers/emailController");

router.post("/", saveEmail);
module.exports = router;
