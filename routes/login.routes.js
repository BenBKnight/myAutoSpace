// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const passport = require("../config/passport");


// Verifies user login information  passport.authenticate("local")
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});
// router.post("/api/login", (req, res) => {
//   console.log(req.body).then((data) => {
//     res.status(200).json(data)
//   })
//   // Sending back a password, even a hashed password, isn't a good idea
//   // res.json({
//   //   email: req.user.email,
//   //   id: req.user.id
//   // });

// });
// router.post("/api/signup", (req, res) => {
//   db.User.create({
//     email: req.body.email,
//     password: req.body.password,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     location: req.body.location
//   })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       // console.log(err)
//       res.status(401).send("Bad");
//     });
// });
module.exports = router;
