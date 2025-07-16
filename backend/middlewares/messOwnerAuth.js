const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.messToken;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.MESS_JWT_SECRET);
      req.messOwnerId = decoded.userId;
      //console.log(decoded);
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  };

module.exports = authMiddleware;
  