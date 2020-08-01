// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


router.post("/api/login", (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      // If they cannot find a user
      // console.log(user)
      // console.log(req.body)
      bcrypt.compare(req.body.password, user.dataValues.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth Unsuccessful"
          });
        }
        if (result) {
          const token = jwt.sign({
            email: user.dataValues.email,
            userId: user.dataValues.id
          },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          )
          return res.status(200).json({
            message: "Auth Successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth Unsuccessful"
        })
      })
    })
})


module.exports = router;
