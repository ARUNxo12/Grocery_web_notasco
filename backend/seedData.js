const MOCK_PRODUCTS = [
    // Fruits (10 items)
    { name: 'Fresh Organic Bananas', price: 120, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.8, description: 'Fresh organic bananas from local farms.', stock: 100 },
    { name: 'Fresh Strawberries', price: 200, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.6, description: 'Freshly picked sweet strawberries.', stock: 50 },
    { name: 'Crisp Red Apples (1kg)', price: 180, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.7, description: 'Crisp and juicy red apples.', stock: 100 },
    { name: 'Juicy Sweet Oranges (1kg)', price: 140, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.5, description: 'Freshly harvested sweet oranges.', stock: 100 },
    { name: 'Green Grapes (500g)', price: 160, image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.8, description: 'Sweet and seedless green grapes.', stock: 100 },
    { name: 'Watermelon (Medium)', price: 100, image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.4, description: 'Refreshing summer watermelon.', stock: 60 },
    { name: 'Ripe Mangoes (1kg)', price: 250, image: 'https://img.freepik.com/premium-photo/ripe-mango-slices-whole-mangoes-tropical-stock-image-food-health-recipe-projects-isolated-close-up-juicy-mangoes_1287927-5712.jpg', category: 'fruits', rating: 4.9, description: 'Sweet and juicy Alphonso mangoes.', stock: 80 },
    { name: 'Pineapple (1pc)', price: 80, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.6, description: 'Fresh tropical pineapple.', stock: 50 },
    { name: 'Pomegranate (1kg)', price: 220, image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80', category: 'fruits', rating: 4.8, description: 'Ruby red sweet pomegranates.', stock: 70 },
    { name: 'Kiwi Box (3pcs)', price: 150, image: 'https://media.istockphoto.com/id/1294170963/photo/box-full-of-raw-fresh-kiwi-fruits.jpg?s=612x612&w=0&k=20&c=5xbrw1ltX4M3dHBgNsmlY9QXB8wsu4XeVOyWLuuCr9A=', category: 'fruits', rating: 4.7, description: 'Zesty and vitamin-rich kiwis.', stock: 90 },

    // Vegetables (10 items)
    { name: 'Organic Carrots (1kg)', price: 60, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.3, description: 'Crunchy organic carrots.', stock: 100 },
    { name: 'Fresh Broccoli (1pc)', price: 90, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.9, description: 'Healthy and fresh broccoli.', stock: 100 },
    { name: 'Green Bell Peppers (500g)', price: 75, image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.4, description: 'Crisp green bell peppers.', stock: 100 },
    { name: 'Red Tomatoes (1kg)', price: 40, image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.6, description: 'Ripe red tomatoes, perfect for cooking.', stock: 100 },
    { name: 'Red Onions (1kg)', price: 50, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.5, description: 'Essential red onions.', stock: 200 },
    { name: 'Fresh Spinach (Bunch)', price: 45, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.7, description: 'Nutrient-rich fresh spinach leaves.', stock: 100 },
    { name: 'Potatoes (2kg)', price: 80, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.6, description: 'Versatile farm potatoes.', stock: 300 },
    { name: 'Garlic (200g)', price: 60, image: 'https://cdn.pixabay.com/photo/2013/02/21/19/12/garlic-84691_1280.jpg', category: 'vegetables', rating: 4.8, description: 'Aromatic garlic bulbs.', stock: 150 },
    { name: 'Cucumbers (1kg)', price: 40, image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.5, description: 'Crisp and hydrating cucumbers.', stock: 120 },
    { name: 'Cauliflower (1pc)', price: 55, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', category: 'vegetables', rating: 4.4, description: 'Fresh white cauliflower.', stock: 80 },

    // Dairy & Eggs (12 items)
    { name: 'Whole Milk 1 Liter', price: 80, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.5, description: 'Farm fresh whole milk.', stock: 100 },
    { name: 'Farm Fresh Eggs (12)', price: 150, image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.9, description: 'Dozen farm fresh eggs.', stock: 100 },
    { name: 'Salted Butter (500g)', price: 290, image: 'https://eatmorebutter.com/wp-content/uploads/2023/09/how-much-salt-is-in-salted-butter_730.png', category: 'dairy', rating: 4.8, description: 'Creamy salted butter.', stock: 100 },
    { name: 'Cheddar Cheese Block (200g)', price: 450, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.7, description: 'Sharp cheddar cheese block.', stock: 100 },
    { name: 'Greek Yogurt (400g)', price: 120, image: 'https://ourkitchenrecipe.com/wp-content/uploads/2025/03/Greek-Yogurt-with-Honey-and-Walnuts.png', category: 'dairy', rating: 4.6, description: 'Thick and creamy plain greek yogurt.', stock: 100 },
    { name: 'Paneer / Cottage Cheese (200g)', price: 110, image: 'https://res.cloudinary.com/bunch-media-library/image/upload/v1595902925/recipes/hyzwvic17mcqxtpk1nuh.jpg', category: 'dairy', rating: 4.8, description: 'Fresh and soft paneer block.', stock: 60 },
    { name: 'Almond Milk (1L)', price: 280, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.7, description: 'Unsweetened plant-based almond milk.', stock: 50 },
    { name: 'Mozzarella Shredded (200g)', price: 250, image: 'https://chefstandards.com/wp-content/uploads/2024/12/Shredded-mozzarella-cheese.jpg', category: 'dairy', rating: 4.8, description: 'Perfectly melting mozzarella cheese.', stock: 80 },
    { name: 'Buttermilk / Chaas (1L)', price: 50, image: 'https://i1.wp.com/foodtrails25.com/wp-content/uploads/2018/03/Chaas-1.jpg?fit=1334%2C1000&ssl=1', category: 'dairy', rating: 4.5, description: 'Refreshing spiced buttermilk.', stock: 120 },
    { name: 'Fresh Cream (200ml)', price: 70, image: 'https://www.cookingclassy.com/wp-content/uploads/2019/04/whipped-cream-1.jpg', category: 'dairy', rating: 4.6, description: 'Rich pouring cream for cooking and baking.', stock: 60 },
    { name: 'Free-Range Brown Eggs (6)', price: 90, image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.8, description: 'Organic brown eggs with bright orange yolks.', stock: 70 },
    { name: 'Fruit Yogurt Cups (Pack of 4)', price: 140, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', category: 'dairy', rating: 4.5, description: 'Assorted fruit flavored yogurt cups.', stock: 50 },

    // Meat & Seafood (12 items)
    { name: 'Grass-Fed Ground Beef (500g)', price: 450, image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.4, description: '100% grass-fed ground beef.', stock: 100 },
    { name: 'Atlantic Salmon Fillet (300g)', price: 850, image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.8, description: 'Premium cut Atlantic salmon.', stock: 50 },
    { name: 'Chicken Breast Boneless (500g)', price: 320, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.6, description: 'Tender boneless chicken breast.', stock: 100 },
    { name: 'Fresh Prawns Unpeeled (500g)', price: 600, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.9, description: 'Freshly caught medium prawns.', stock: 80 },
    { name: 'Mutton Curry Cut (500g)', price: 750, image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.8, description: 'Tender mutton chops bone-in.', stock: 60 },
    { name: 'Chicken Drumsticks (500g)', price: 290, image: 'https://www.chickendelight.com.au/wp-content/uploads/2022/06/chicken-Drumsticks-2.jpg', category: 'meat', rating: 4.7, description: 'Juicy chicken drumsticks for roasting or frying.', stock: 90 },
    { name: 'Lamb Mince / Keema (500g)', price: 850, image: 'http://www.manhafoods.co.uk/cdn/shop/files/Lamb-Leg-Mince-_1.jpg?v=1737056193', category: 'meat', rating: 4.8, description: 'Premium minced lamb meat.', stock: 40 },
    { name: 'Tilapia Fish Fillets (500g)', price: 400, image: 'http://allfreshseafood.com/cdn/shop/products/Tilapiafresh.jpg?v=1624048662', category: 'meat', rating: 4.5, description: 'White fleshy tilapia fish fillets.', stock: 70 },
    { name: 'Pork Chops (500g)', price: 550, image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.6, description: 'Thick cut pork chops.', stock: 50 },
    { name: 'Smoked Bacon Strips (250g)', price: 380, image: 'https://up.yimg.com/ib/th/id/OIP.nS61Z8MzA-DY9-Ky5iU8vAHaE8?pid=Api&rs=1&c=1&qlt=95&w=150&h=100', category: 'meat', rating: 4.9, description: 'Crispy hardwood smoked bacon.', stock: 120 },
    { name: 'Chicken Sausages (Pack of 6)', price: 220, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80', category: 'meat', rating: 4.5, description: 'Spiced chicken breakfast sausages.', stock: 80 },
    { name: 'Crab Meat (200g)', price: 950, image: 'https://seafood-connection.com/wp-content/uploads/2020/04/King-Crab-meat-e1587451832270.jpg', category: 'meat', rating: 4.7, description: 'Freshly shelled sweet crab meat.', stock: 30 },

    // Bakery (12 items)
    { name: 'Sourdough Bread Loaf', price: 90, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.7, description: 'Artisan sourdough baked fresh daily.', stock: 40 },
    { name: 'French Baguette', price: 60, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.8, description: 'Classic French baguette.', stock: 50 },
    { name: 'Butter Croissants (4 pcs)', price: 180, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.9, description: 'Flaky buttery croissants.', stock: 60 },
    { name: 'Chocolate Chip Cookies (Box)', price: 150, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.5, description: 'Delicious chocolate chip cookies.', stock: 80 },
    { name: 'Banana Walnut Bread Loaf', price: 220, image: 'https://cookwithjulia.com/wp-content/uploads/2025/07/banana-nut-bread-recipe-768x768.webp', category: 'bakery', rating: 4.9, description: 'Freshly baked banana bread with walnuts.', stock: 40 },
    { name: 'Whole Wheat Loaf', price: 65, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.6, description: 'Healthy whole wheat sandwich bread.', stock: 60 },
    { name: 'Blueberry Muffins (4 pcs)', price: 200, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.8, description: 'Soft muffins packed with blueberries.', stock: 50 },
    { name: 'Garlic Bread Stick', price: 85, image: 'https://cdn.grofers.com/assets/search/usecase/banner/garlic_bread_stick_01.png', category: 'bakery', rating: 4.7, description: 'Buttery garlic and herb bread.', stock: 70 },
    { name: 'Cinnamon Rolls (Pack of 2)', price: 160, image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.9, description: 'Gooey cinnamon rolls with icing.', stock: 40 },
    { name: 'Bagels (Pack of 4)', price: 140, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.5, description: 'Chewy New York style plain bagels.', stock: 60 },
    { name: 'Chocolate Brownies (4 pcs)', price: 250, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.8, description: 'Fudgy dark chocolate brownies.', stock: 50 },
    { name: 'Burger Buns (Pack of 4)', price: 50, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', category: 'bakery', rating: 4.6, description: 'Soft seeded burger buns.', stock: 100 },

    // Pantry (10 items)
    { name: 'Premium Extra Virgin Olive Oil (1L)', price: 900, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.9, description: 'Cold-pressed extra virgin olive oil.', stock: 100 },
    { name: 'Raw Organic Honey (500g)', price: 450, image: 'https://s.alicdn.com/@sc02/kf/H9c7f282c6aa84d16adc432f9f617fe86H.jpg', category: 'pantry', rating: 4.8, description: 'Pure raw organic honey.', stock: 100 },
    { name: 'Whole Wheat Pasta (500g)', price: 120, image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.4, description: 'Healthy whole wheat fusilli pasta.', stock: 100 },
    { name: 'Basmati Rice (5kg)', price: 850, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.7, description: 'Long grain aromatic basmati rice.', stock: 200 },
    { name: 'Peanut Butter Crunchy (340g)', price: 340, image: 'https://ilovepeanutbutter.com/cdn/shop/products/PBCo-Crunchy-Open-Face-Sandwich-1500x1500px_1800x1800.jpg?v=1570036741', category: 'pantry', rating: 4.8, description: 'All-natural crunchy peanut butter without sugar.', stock: 100 },
    { name: 'Tomato Ketchup (500g)', price: 150, image: 'https://cooklikeczechs.com/wp-content/uploads/2021/09/homemade-tomato-ketchup-recipe.jpg', category: 'pantry', rating: 4.5, description: 'Classic sweet and tangy tomato ketchup.', stock: 150 },
    { name: 'Green Tea Bags (Box of 25)', price: 200, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.6, description: 'Antioxidant-rich organic green tea.', stock: 100 },
    { name: 'Arabica Coffee Beans (250g)', price: 450, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=400&q=80', category: 'pantry', rating: 4.9, description: 'Freshly roasted arabica coffee beans.', stock: 70 },
    { name: 'Himalayan Pink Salt (1kg)', price: 120, image: 'https://lh5.googleusercontent.com/1APzpXtfEz_h-21TYeNNv24seJIuOAmZ-z0APblvIGnSZGf_p9onUt5oG1b6PPkuqzgMqQ85PBo7AzcE9msfc9bWc5HXjtkPR9raPNMJcPRuKMtyieinPj01R6nl0KZqON-E8d2zM8ShzlTCAw', category: 'pantry', rating: 4.7, description: 'Unrefined pink rock salt.', stock: 120 },
    { name: 'Oats (1kg)', price: 210, image: 'https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/10/Oats.jpg', category: 'pantry', rating: 4.6, description: 'Healthy rolled oats for breakfast.', stock: 150 },
];

const MOCK_CATEGORIES = [
    { name: 'fruits', description: 'Fresh fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80' },
    { name: 'vegetables', description: 'Fresh vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a000c1267c4?auto=format&fit=crop&w=400&q=80' },
    { name: 'dairy', description: 'Dairy & Eggs', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80' },
    { name: 'meat', description: 'Meat & Seafood', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80' },
    { name: 'bakery', description: 'Bakery items', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
    { name: 'pantry', description: 'Pantry essentials', image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=400&q=80' },
];

const MOCK_USERS = [
    { name: 'Admin User', email: 'admin@freshcart.com', password: 'adminpassword123', role: 'admin' },
    { name: 'Demo Customer', email: 'user@freshcart.com', password: 'userpassword123', role: 'user' }
];

module.exports = { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_USERS };
