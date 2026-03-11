const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const Category = require("./models/Category");

const connectDB = require("./config/db");

dotenv.config();

connectDB().then(() => {
    console.log("MongoDB connected for seeding...");
});

const MOCK_PRODUCTS = [
    // Fruits
    { name: 'Fresh Organic Bananas', price: 120, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.8, description: 'Fresh organic bananas from local farms.', stock: 100 },
    { name: 'Fresh Strawberries', price: 200, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.6, description: 'Freshly picked sweet strawberries.', stock: 50 },
    { name: 'Crisp Red Apples (1kg)', price: 180, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.7, description: 'Crisp and juicy red apples.', stock: 100 },
    { name: 'Juicy Sweet Oranges', price: 140, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.5, description: 'Freshly harvested sweet oranges.', stock: 100 },

    // Vegetables
    { name: 'Organic Carrots', price: 60, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.3, description: 'Crunchy organic carrots.', stock: 100 },
    { name: 'Fresh Broccoli', price: 90, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.9, description: 'Healthy and fresh broccoli.', stock: 100 },
    { name: 'Green Bell Peppers', price: 75, image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.4, description: 'Crisp green bell peppers.', stock: 100 },
    { name: 'Red Tomatoes (1kg)', price: 40, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.6, description: 'Ripe red tomatoes, perfect for cooking.', stock: 100 },

    // Dairy & Eggs
    { name: 'Whole Milk 1 Liter', price: 80, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.5, description: 'Farm fresh whole milk.', stock: 100 },
    { name: 'Farm Fresh Eggs (12)', price: 150, image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.9, description: 'Dozen farm fresh eggs.', stock: 100 },
    { name: 'Salted Butter (500g)', price: 290, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Butter_-_1_-_Evan-Amos.jpg/800px-Butter_-_1_-_Evan-Amos.jpg', category: 'dairy', rating: 4.8, description: 'Creamy salted butter.', stock: 100 },
    { name: 'Cheddar Cheese Block', price: 450, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.7, description: 'Sharp cheddar cheese block.', stock: 100 },

    // Meat & Seafood
    { name: 'Grass-Fed Ground Beef', price: 450, image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.4, description: '100% grass-fed ground beef.', stock: 100 },
    { name: 'Atlantic Salmon Fillet', price: 850, image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.8, description: 'Premium cut Atlantic salmon.', stock: 50 },
    { name: 'Chicken Breast (Whole)', price: 320, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.6, description: 'Tender whole chicken breast.', stock: 100 },
    { name: 'Fresh Prawns (500g)', price: 600, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.9, description: 'Freshly caught prawns.', stock: 80 },

    // Bakery
    { name: 'Sourdough Bread', price: 90, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.7, description: 'Artisan sourdough baked fresh daily.', stock: 40 },
    { name: 'French Baguette', price: 60, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.8, description: 'Classic French baguette.', stock: 50 },
    { name: 'Butter Croissants (4)', price: 180, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.9, description: 'Flaky buttery croissants.', stock: 60 },
    { name: 'Chocolate Chip Cookies', price: 150, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.5, description: 'Delicious chocolate chip cookies.', stock: 80 },

    // Pantry
    { name: 'Premium Olive Oil', price: 900, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.9, description: 'Extra virgin olive oil.', stock: 100 },
    { name: 'Raw Organic Honey', price: 450, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honey_in_a_glass_jar.jpg/800px-Honey_in_a_glass_jar.jpg', category: 'pantry', rating: 4.8, description: 'Pure raw organic honey.', stock: 100 },
    { name: 'Whole Wheat Pasta', price: 120, image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.4, description: 'Healthy whole wheat pasta.', stock: 100 },
];

const MOCK_CATEGORIES = [
    { name: 'fruits', description: 'Fresh fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80' },
    { name: 'vegetables', description: 'Fresh vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a000c1267c4?auto=format&fit=crop&w=400&q=80' },
    { name: 'dairy', description: 'Dairy & Eggs', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80' },
    { name: 'meat', description: 'Meat & Seafood', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=400&q=80' },
    { name: 'bakery', description: 'Bakery items', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
    { name: 'pantry', description: 'Pantry essentials', image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=400&q=80' },
];

const seedDB = async () => {
    try {
        await Product.deleteMany({});
        await Category.deleteMany({});
        console.log("Deleted old data");

        await Product.insertMany(MOCK_PRODUCTS);
        console.log("Inserted new generic products");

        await Category.insertMany(MOCK_CATEGORIES);
        console.log("Inserted mock categories");

        console.log("Seeding Success!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seedDB();
