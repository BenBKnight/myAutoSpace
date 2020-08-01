const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    console.log("+========================================================+")
    jwt.verify(token, process.env.JWT_KEY);
    req.userId = decodedToken.id
    console.log(req.userId)
    console.log("auth check", req.userData)
    next();
  }
  catch (error) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(req.headers)
    return res.status(401).json({
      message: "Auth Unsuccessful"
    })
  }

};
