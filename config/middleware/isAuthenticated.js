const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    // console.log("+========================================================+", req.headers)
    jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    // console.log(req.userId)
    // console.log("auth check", req.userData)
    next();
  }
  catch (error) {
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(error)
    return res.status(401).json({
      message: "Auth Unsuccessful"
    })
  }

};
