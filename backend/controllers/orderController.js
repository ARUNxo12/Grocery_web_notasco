const Order = require("../models/Order");
const Product = require("../models/Product");

const placeOrder = async (req, res) => {
    try {
        const { products, shippingAddress, phone } = req.body;

        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ success: false, message: "Products array is required." });
        }
        if (!shippingAddress || !phone) {
            return res.status(400).json({ success: false, message: "Shipping address and phone number are required." });
        }

        let totalAmount = 0;
        const orderProducts = [];

        for (const item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ success: false, message: `Product ${item.product} not found.` });
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({ success: false, message: `Insufficient stock for ${product.name}.` });
            }

            totalAmount += product.price * item.quantity;
            orderProducts.push({ product: product._id, quantity: item.quantity });

            product.stock -= item.quantity;
            await product.save();
        }

        const order = await Order.create({
            user: req.user._id,
            products: orderProducts,
            totalAmount,
            shippingAddress,
            phone
        });

        const populated = await order.populate([
            { path: "products.product", select: "name price image" },
        ]);

        res.status(201).json({ success: true, message: "Order placed successfully.", data: populated });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate("products.product", "name price image")
            .sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const filter = {};
        if (status) filter.status = status;

        const skip = (Number(page) - 1) * Number(limit);

        const [orders, total] = await Promise.all([
            Order.find(filter)
                .populate("user", "name email")
                .populate("products.product", "name price image")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(Number(limit)),
            Order.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            data: orders,
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

const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

        if (!status || !validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(", ")}` });
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        )
            .populate("user", "name email")
            .populate("products.product", "name price image");

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found." });
        }

        res.status(200).json({ success: true, message: "Order status updated.", data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { placeOrder, getMyOrders, getAllOrders, updateOrderStatus };
