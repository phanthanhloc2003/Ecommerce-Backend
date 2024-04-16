const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const OrderController = require("../controller/OrderController");
const { authUserMiddleware } = require("../middleware/authUserMiddleware");
router.post("/create-order",authUserMiddleware, OrderController.createOrder);
router.get("/getAll-order",authUserMiddleware, OrderController.getAllOrder);
router.get("/getDetail-order/:id",authUserMiddleware, OrderController.getDetailOrder);

module.exports = router;
