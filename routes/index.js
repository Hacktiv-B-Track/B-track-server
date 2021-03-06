const express = require("express");
const router = express.Router();

const budgetRoutes = require("./budgetRoutes");
const transactionRoutes = require("./transactionRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("../routes/categoryRoutes");
const departmentRoutes = require("./departmentRoutes");
const errorHandler = require("../middlewares/errorHandler");
const scanInvoiceRoutes = require("./scanInvoiceRoutes");

router.use("/", userRoutes);

router.use("/departments", departmentRoutes);

router.use("/budgets", budgetRoutes);

router.use("/categories", categoryRoutes);

router.use("/transactions", transactionRoutes);

router.use("/scanInvoice", scanInvoiceRoutes);

router.use(errorHandler);

module.exports = router;
