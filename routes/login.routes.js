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
module.exports = router;
