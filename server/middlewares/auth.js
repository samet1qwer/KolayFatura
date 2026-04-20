const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { generateToken, verifyToken };
