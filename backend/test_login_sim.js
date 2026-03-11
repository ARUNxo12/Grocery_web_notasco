const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const User = require('./models/User');
const connectDB = require('./config/db');
const bcrypt = require('bcryptjs');

async function testLogin() {
    await connectDB();
    const email = 'admin@freshcart.com';
    const password = 'adminpassword123';

    console.log(`Testing login for: ${email}`);
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        console.log('User not found!');
        process.exit(1);
    }

    console.log(`User found: ${user.name}`);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${isMatch}`);

    if (isMatch) {
        console.log('Login logic SUCCESSFUL in standalone script.');
    } else {
        console.log('Login logic FAILED in standalone script.');
    }
    process.exit();
}

testLogin();
