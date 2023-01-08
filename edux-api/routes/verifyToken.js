const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE, (err, user) => {
      if (err) res.status(403).json("Token is not valid!!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("User not authorised");
  }
};

const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("User not allow");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("User not allow");
    }
  });
};

module.exports = { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin };
