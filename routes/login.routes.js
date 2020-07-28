// Requiring path to so we can use relative routes to our HTML files
const app = require("express");
const router = app.Router();
const passport = require("../config/passport");

// Root route sends user to members page if they are logging in, if not, sends to login page
router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("login");
});

// Establishes /login as root route
router.get("/login", (req, res) => {
  res.redirect("/");
});

// Verifies user login information  passport.authenticate("local")
router.post("/api/login", (req, res) => {
  console.log("api route hit")
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

module.exports = router;
