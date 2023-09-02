const selectEmployees = `
SELECT *
FROM employees;`;

const updateEmployee = `
UPDATE employees
SET first_name = ?,
    last_name = ?,
    salary = ?
WHERE id = ?;`;

const insertEmployee = `
INSERT INTO employees (first_name, last_name, salary)
VALUES (?, ?, ?);`;

const deleteEmployee = `
DELETE FROM employees
WHERE id = ?;`;

module.exports = {
  selectEmployees,
  updateEmployee,
  insertEmployee,
  deleteEmployee,
};
