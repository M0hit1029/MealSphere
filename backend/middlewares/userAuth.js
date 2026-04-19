const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const bearerToken = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;
    const token = req.cookies.userToken || bearerToken;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.USER_JWT_SECRET);
      req.userId = decoded.id;
      //console.log(decoded);
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  };

module.exports = userAuth;
  