const express = require("express");
const router = express.Router();
const { register, login, adminLogin } = require("../controllers/authController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Protected route working",
    user: req.user,
  });
});

router.post("/register", register);
router.post("/login", login);
router.post("/admin-login", adminLogin);
router.get("/admin-test", verifyToken, isAdmin, (req, res) => {
    res.json({ 
        success: true,
        message: "Admin route working"
    });
});
module.exports = router;
