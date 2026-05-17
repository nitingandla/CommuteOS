const prisma = require("../config/prisma");

const getRideMatches = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    const groupedRides = {};

    employees.forEach((employee) => {
      const key = `${employee.office} - ${employee.locality}`;

      if (!groupedRides[key]) {
        groupedRides[key] = {
          employees: [],
          recommendedRide: "",
        };
      }

      groupedRides[key].employees.push(employee);
    });

    Object.keys(groupedRides).forEach((group) => {
      const count = groupedRides[group].employees.length;

      groupedRides[group].recommendedRide =
        count >= 2 ? "Carpool" : "Bike/Metro";
    });

    res.json({
      success: true,
      totalEmployees: employees.length,
      rideGroups: groupedRides,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getRideMatches,
};