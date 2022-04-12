const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // const user=
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      err ? res.status(403).json("tokenis not valid") : (req.user = user);
      next();
    });
  } else {
    res.status(401).json("not authenticated");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log(req, user);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(500).json("you cannot access this task");
    //   console.log(`Error ${req.user}`);
    }
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(500).json("you cannot access this task");
    }
  });
};

module.exports = { verifyTokenAndAdmin, verifyTokenAndAuthorization };
