// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const db = require("../models");

// Takes new user information and sends it to database
router.post("/api/signup", (req, res) => {
  console.log("hit route")
  console.log(req.body)
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location
  })
    .then((res) => {
      console.log("hit me here");
      app.send(res)
      // res.redirect(307, "/members");
    })
    .catch(err => {
      res.status(401).send("Bad");
    });
});

module.exports = router;
