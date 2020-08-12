// Requiring our models and passport as we've configured it
const db = require("../models");
const app = require("express");
const router = app.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Route for getting some data about our user to be used client side
router.get("/api/user_data/:userid", (req, res) => {
  const userId = req.params.userid;
  db.User.findAll({
    where: {
      id: userId
    }
  }).then(results => {
    res.json(results);
  }).catch(err => console.log(err))
  // Otherwise send back the user's email and id

});

module.exports = router;