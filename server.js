const express = require("express");
const app = express();

// define a single endpoint that responds to a GET request
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send({ message: "Hello, World!" });
});

// start the server on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

