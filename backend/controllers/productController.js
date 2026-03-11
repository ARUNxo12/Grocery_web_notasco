const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        const { category, sort, page = 1, limit = 12 } = req.query;

        const filter = {};
        if (category) filter.category = category;

        const sortOption = {};
        if (sort === "price_asc") sortOption.price = 1;
        else if (sort === "price_desc") sortOption.price = -1;
        else if (sort === "newest") sortOption.createdAt = -1;
        else sortOption.createdAt = -1;

        const skip = (Number(page) - 1) * Number(limit);

        const [products, total] = await Promise.all([
            Product.find(filter).sort(sortOption).skip(skip).limit(Number(limit)),
            Product.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            data: products,
            pagination: {
                total,
                page: Number(page),
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, image } = req.body;

        if (!name || !description || price === undefined || !category) {
            return res.status(400).json({ success: false, message: "Name, description, price, and category are required." });
        }

        const product = await Product.create({ name, description, price, category, stock, image });

        res.status(201).json({ success: true, message: "Product created successfully.", data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }

        res.status(200).json({ success: true, message: "Product updated successfully.", data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
