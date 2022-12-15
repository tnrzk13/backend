const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("Users");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

// create a post request to /users
router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    // save the user to the database
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error saving user");
    res.render("users/new", { firstName: req.body.firstName });
  }
  res.send({ message: "user submitted" });
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Show User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

// this middleware will run for any route that includes :id
const users = [{ name: "John" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  // console.log(`User ID: ${id}`);
  next();
});

module.exports = router;

