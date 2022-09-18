const express = require("express");

const router = new express.Router();

//signup
router.post("/mobile", async (req, res) => {
  try {
    res.status(201).send({ msg:"Your payment is successfully added to the your mobile bill" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
