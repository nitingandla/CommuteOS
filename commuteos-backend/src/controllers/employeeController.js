const prisma = require("../config/prisma");

const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, locality, office, preferredTransport } = req.body;

    const employee = await prisma.employee.create({
      data: {
        name,
        locality,
        office,
        preferredTransport,
      },
    });

    res.status(201).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
};