const express = require("express");
const router = express.Router();
const {
    placeOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
} = require("../controllers/orderController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
router.post("/", verifyToken, placeOrder);
router.get("/my-orders", verifyToken, getMyOrders);
router.get("/", verifyToken, isAdmin, getAllOrders);
router.put("/:id/status", verifyToken, isAdmin, updateOrderStatus);

module.exports = router;

