const jwt = require("jsonwebtoken");

const secret = "inirahasia";

const signToken = (payload) => {
  return jwt.sign(payload, secret);
};
const decodeToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { decodeToken, signToken };
