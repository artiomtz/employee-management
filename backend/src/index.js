const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("fetching employees...");
  res.status(200).json({ msg: "test" });
});

app.listen(3000);
