const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "router working" });
});

module.exports = router;
