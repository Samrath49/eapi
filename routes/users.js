const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Kumar" });
});

router.post("/", (req, res) => {
  const isValid = false;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error occurred");
    res.render("users/new", { firstName: req.body.firstName });
  }
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "Amit" }, { name: "Sapna" }, { name: "Tarun" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
