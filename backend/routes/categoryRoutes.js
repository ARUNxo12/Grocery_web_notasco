const express = require('express');
const router = express.Router();
const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/categoryController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getCategories)
    .post(verifyToken, isAdmin, createCategory);

router.route('/:id')
    .put(verifyToken, isAdmin, updateCategory)
    .delete(verifyToken, isAdmin, deleteCategory);

module.exports = router;
