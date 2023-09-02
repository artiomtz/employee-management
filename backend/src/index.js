const express = require("express");
const app = express();
const cors = require("cors");
const employeeRouter = require("./routes/employees");
const clientRoute = require("./config/api");

app.use(
  cors({
    origin: clientRoute,
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/employees", employeeRouter);
app.listen(3000);
