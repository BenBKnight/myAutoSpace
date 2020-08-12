const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, "SecretPasswordNoOneWillEverGuess");
    next();
  }
  catch (error) {
    console.log(error)
    return res.status(401).json({
      message: "Auth Unsuccessful"
    })
  }

};
