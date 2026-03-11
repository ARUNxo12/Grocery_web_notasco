const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const User = require('./models/User');
const connectDB = require('./config/db');

async function checkUsers() {
    await connectDB();
    const users = await User.find({}).select('+password');
    console.log('Users in DB:');
    users.forEach(u => {
        console.log(`- ${u.name} (${u.email}) [Role: ${u.role}] Hash: ${u.password ? 'Exists' : 'Missing'}`);
    });
    process.exit();
}

checkUsers();
