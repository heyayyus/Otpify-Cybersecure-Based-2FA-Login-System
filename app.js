// Author: Aayush Jha
// Website: https://heyayyus.in

const express = require('express');
const connectDB = require('./config/db');
const session = require('express-session');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Middleware for session management

app.use(session({   
        secret: 'supersecretkey',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
}));
// Import and use the auth routes
// Ensure the authRoutes file is correctly set up to handle authentication routes

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth',authRoutes);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Ensure the User model is imported to create the collection