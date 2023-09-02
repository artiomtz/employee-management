const selectEmployees = `
SELECT *
FROM Employees;`;

const updateEmployee = `
UPDATE Employees
SET firstName = ?,
  lastName = ?,
  salary = ?
WHERE id = ?;`;

const insertEmployee = `
INSERT INTO Employees (firstName, lastName, salary)
VALUES (?, ?, ?);`;

const deleteEmployee = `
DELETE FROM Employees
WHERE id = ?;`;

module.exports = {
  selectEmployees,
  updateEmployee,
  insertEmployee,
  deleteEmployee,
};
