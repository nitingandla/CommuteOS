const express = require("express");
const router = express.Router();

const {
  getRideMatches,
} = require("../controllers/rideController");

router.get("/groups", getRideMatches);

module.exports = router;