const express = require("express");
const router = express.Router();
const { getProfile, getAllUsers, updateProfile, deleteUser } = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);
router.get("/", verifyToken, isAdmin, getAllUsers);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

module.exports = router;
