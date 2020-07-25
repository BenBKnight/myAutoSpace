const app = require("express");
const router = app.Router();
const test = require("../db/testData");

// router.("/carmd", (req, res) => {

// });

router.get("/carmd", (req, res) => {
  //console.log(test);
  res.send(test);
});

module.exports = router;
