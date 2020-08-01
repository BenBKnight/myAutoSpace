const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("+========================================================+")
    console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded
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
