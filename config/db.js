// Author: Aayush Jha
// Website: https://heyayyus.in

const mongoose = require('mongoose');
const User = require('../models/user'); // Import the User model        

const MONGO_URI = "mongodb+srv://heyayyus:p17M2XuCa5iBNQYC@cluster0.pdfbxrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected Successfully');

        // Create the empty User collection
        await User.createCollection();
        console.log('User collection created successfully');
    } catch (err) {
        console.error('MongoDB Connection Failed:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

connectDB();

module.exports = connectDB;
