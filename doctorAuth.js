const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = "weVSDVVJ0VASVQ3VREVQ";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token,key);
    if (decoded) {
      const doctorID = decoded.doctorID;
      req.body.doctorID = doctorID;
      next();
    } else {
      res.send("You cannot edit this token.");
    }
  } else {
    res.send("Inadequate permissions, Please login first.");
  }
};

module.exports = { authenticate };
