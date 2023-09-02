const express = require("express");
const router = express.Router();
const pool = require("../config/database");
const employeeData = require("../public/sample_data.json");
// const {
//   selectEmployees,
//   updateEmployee,
//   insertEmployee,
//   deleteEmployee,
// } = require("../dataAccess/queries");

router.get("/", (req, res) => {
  console.log("fetching employees...");
  res.status(200).json(employeeData);
});

router.post("/", (req, res) => {
  console.log("saving a new employee...");
  const { first_name, last_name, salary } = req.body;
  // pool.query(
  //   insertEmployee,
  //   [first_name, last_name, salary],
  //   (err, results) => {
  //     if (err) {
  //       console.error("Error executing query:", err);
  //       return;
  //     }
  //     console.log("Query results:", results);
  //   }
  // );

  res.status(200).json({ result: "ok", id: 10 });
});

router.put("/:id", (req, res) => {
  const employeeId = req.params.id;
  console.log(`updating employee id=${employeeId}...`);
  // update an employee
  res.status(200).json({ result: "ok" });
});

router.delete("/:id", (req, res) => {
  const employeeId = req.params.id;
  console.log(`deleting employee id=${employeeId}...`);
  // delete an employee
  res.status(200).json({ result: "ok" });
});

module.exports = router;
