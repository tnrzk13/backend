const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(logger); // use the logger middleware

app.use(express.static("public")); // serve static files from the public folder
app.use(express.urlencoded({ extended: true })); // parse form data

// require /routes/users.js and use it for all requests to /users
app.use("/users", require("./routes/users"));

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send({ message: "Hello, World!" });
});

// this is a middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// start the server on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

