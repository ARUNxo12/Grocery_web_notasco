const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bcrypt = require("bcryptjs");
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Grocery API is running." });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);

const Product = require("./models/Product");
const Category = require("./models/Category");
const User = require("./models/User");

app.get("/api/seed", async (req, res) => {
    try {
        const { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_USERS } = require("./seedData");

        await Product.deleteMany({});
        await Category.deleteMany({});
        await User.deleteMany({});

        // Hash passwords for mock users
        const hashedUsers = await Promise.all(MOCK_USERS.map(async (u) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(u.password, salt);
            return { ...u, password: hashedPassword };
        }));

        await Product.insertMany(MOCK_PRODUCTS);
        await Category.insertMany(MOCK_CATEGORIES);
        await User.insertMany(hashedUsers);

        res.json({
            message: "Seeded DB!",
            products: MOCK_PRODUCTS.length,
            categories: MOCK_CATEGORIES.length,
            users: MOCK_USERS.length
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found." });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
