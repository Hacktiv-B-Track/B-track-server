const error = (err, req, res, next) => {
  console.log(err.name, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  switch (err.name) {
    case "NotFound":
      res.status(404).json({ message: "Not Found" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "login first !" });
      break;
    case "InvalidToken":
      res.status(401).json({ message: "Invalid Token" });
      break;
    case "SequelizeValidationError":
      const errors = err.errors.map((el) => {
        return el.message;
      });
      res.status(400).json({
        message: errors,
      });
      break;

    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};

module.exports = error;
