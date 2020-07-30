const app = require("express");
const router = app.Router();

// router.("/carmd", (req, res) => {

// });

router.get("/carmd", (req, res) => {
  //console.log(test);
  res.send(test);
});

module.exports = router;
