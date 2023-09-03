const express = require("express");
const router = express.Router();
const pool = require("../config/database");
const {
  selectEmployees,
  updateEmployee,
  insertEmployee,
  deleteEmployee,
} = require("../dataAccess/queries");

// get all employees
router.get("/", (req, res) => {
  console.log("fetching employees...");
  pool.query(selectEmployees, (err, results) => {
    if (err) {
      console.error("error getting employees:", err);
      res.status(500).json({ error: "internal Server Error" });
      return;
    }
    console.log("getting employees query results:", results);
    res.status(200).json({ results });
  });
});

// create an employee
router.post("/", (req, res) => {
  console.log("saving a new employee...");
  const { firstName, lastName, salary } = req.body;
  pool.query(insertEmployee, [firstName, lastName, salary], (err, results) => {
    if (err) {
      console.error("error inserting employee:", err);
      res.status(500).json({ error: "internal Server Error" });
      return;
    }
    console.log("inserting employee query results:", results);
    res.status(200).json({ results: "ok", id: `${results.insertId}` });
  });
});

// update an employee by id
router.put("/:id", (req, res) => {
  const employeeId = req.params.id;
  console.log(`updating employee id=${employeeId}...`);
  const { firstName, lastName, salary } = req.body;
  pool.query(
    updateEmployee,
    [firstName, lastName, salary, employeeId],
    (err, results) => {
      if (err) {
        console.error(`error updating employee id=${employeeId}:`, err);
        res.status(500).json({ error: "internal Server Error" });
        return;
      }
      console.log("updating employee query results:", results);
      res.status(200).json({ results: "ok" });
    }
  );
});

// delete and employee by id
router.delete("/:id", (req, res) => {
  const employeeId = req.params.id;
  console.log(`deleting employee id=${employeeId}...`);
  pool.query(deleteEmployee, [employeeId], (err, results) => {
    if (err) {
      console.error(`error deleting employee id=${employeeId}:`, err);
      res.status(500).json({ error: "internal Server Error" });
      return;
    }
    console.log("deleting employee query results:", results);
    res.status(200).json({ results: "ok" });
  });
});

module.exports = router;
