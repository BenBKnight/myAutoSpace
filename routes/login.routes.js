// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const passport = require("../config/passport");
const db = require("../models");
const bcrypt = require("bcryptjs");
// const bcrypt = require("bcryptjs")

// Verifies user login information  passport.authenticate("local")
// router.post("/api/login", passport.authenticate("local"), (req, res) => {
//   // Sending back a password, even a hashed password, isn't a good idea
//   res.json({
//     email: req.user.email,
//     id: req.user.id
//   });
// });


router.post("/api/login", (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      // If they cannot find a user
      console.log(user)
      console.log(req.body)
      bcrypt.compare(req.body.password, user.dataValues.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth Unsuccessful"
          });
        }
        if (result) {
          return res.status(200).json({
            message: "Auth Successful"
          });
        }
        res.status(401).json({
          message: "Auth Unsuccessful"
        })
      })
    })
})


module.exports = router;
