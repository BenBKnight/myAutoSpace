// Requiring our models and passport as we've configured it
const db = require("../models");
const app = require("express");
const router = app.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Sends to Member page, after they are authenticated
router.get("/members", isAuthenticated, (req, res) => {
  res.render("members");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  db.User.findAll({}).then(result => {
    res.send(result);
  }).catch(err => console.log(err))
  // Otherwise send back the user's email and id

});

module.exports = router;
