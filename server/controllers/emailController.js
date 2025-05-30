const Email = require("../models/Email");

exports.saveEmail = async (req, res) => {
  const { email, link } = req.body;
  const record = new Email({ email, link });
  await record.save();
  res.json({ message: "Saved successfully" });
};
