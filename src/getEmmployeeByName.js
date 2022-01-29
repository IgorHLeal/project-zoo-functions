const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const verifyNames = (employee, name) => employee.firstName === name || employee.lastName === name;

  return employees.find((employee) => verifyNames(employee, employeeName));
}

module.exports = getEmployeeByName;
