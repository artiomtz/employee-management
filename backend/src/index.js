const express = require("express");
const app = express();

const employeeRouter = require("./routes/employees");
app.use("/employees", employeeRouter);
app.listen(3000);
