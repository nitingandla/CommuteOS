function getRideType(groupSize) {
  if (groupSize >= 4) {
    return "Mini Shuttle";
  }

  if (groupSize >= 2) {
    return "Carpool";
  }

  return "Bike/Metro";
}

function groupEmployees(employees) {
  const grouped = {};

  employees.forEach((employee) => {
    const key = `${employee.office} - ${employee.locality}`;

    if (!grouped[key]) {
      grouped[key] = {
        employees: [],
        recommendedRide: "",
      };
    }

    grouped[key].employees.push(employee);
  });

  Object.keys(grouped).forEach((group) => {
    const size = grouped[group].employees.length;

    grouped[group].recommendedRide = getRideType(size);
  });

  return grouped;
}

module.exports = {
  groupEmployees,
};