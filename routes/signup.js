// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const db = require("../models");
// const User = require("../models/user")(db);

// Renders signup page
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

// Takes new user information and sends it to database

router.post("/api/signup", (req, res) => {
  console.log("hit route")
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

module.exports = router;
