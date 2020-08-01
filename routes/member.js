// Requiring our models and passport as we've configured it
const app = require("express");
const router = app.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Sends to Member page, after they are authenticated
router.get("/members", isAuthenticated, (req, res) => {
  res.render("members");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", isAuthenticated, (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    res.json({
      lastName: req.user.lastName,
      firstName: req.user.firstName,
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router;
