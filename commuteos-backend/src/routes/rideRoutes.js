const express = require("express");
const router = express.Router();

const employees = require("../data/employees");

const {
  groupEmployees,
} = require("../services/rideMatchingService");

router.get("/match", (req, res) => {
  const groupedRides = groupEmployees(employees);

  res.json({
    success: true,
    totalEmployees: employees.length,
    rideGroups: groupedRides,
  });
});

module.exports = router;