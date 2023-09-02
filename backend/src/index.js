const express = require("express");
const app = express();
const cors = require("cors");
const employeeRouter = require("./routes/employees");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/employees", employeeRouter);
app.listen(3000);
