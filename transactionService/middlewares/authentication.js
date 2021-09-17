const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  const { access_token: accessToken } = req.headers;
  try {
    const payload = decodeToken(accessToken);
    const found = await User.findByPk(payload.id);
    if (!found) {
      throw { name: "InvalidToken" };
    } else {
      req.user = {
        id: found.id,
        email: found.email,
      };
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication };
