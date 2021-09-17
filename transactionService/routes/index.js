const router = require("express").Router();

const transactionRoute = require("./transactionRouter");
const { authentication } = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");

router.use("/transactions", authentication, transactionRoute);
router.use(errorHandler);

module.exports = router;
