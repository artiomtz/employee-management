const express = require("express");
const router = express.Router();
const employeeData = require("../public/sample_data.json");

router.get("/", (req, res) => {
  console.log("fetching employees...");
  res.status(200).json(employeeData);
});

router.post("/", (req, res) => {
  console.log("saving a new employee...");
  // add new employee
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
