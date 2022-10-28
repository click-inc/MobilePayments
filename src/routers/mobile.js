const express = require("express");

const Auth = require("../middleware/auth");

const router = new express.Router();

//signup
router.post("/mobile", Auth, async (req, res) => {
  try {
    res.status(201).send({ status: "success" });
  } catch (error) {
    res.status(400).send({ status: "failed" });
  }
});

module.exports = router;
