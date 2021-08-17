const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (token) {
      const tokenData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = tokenData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
