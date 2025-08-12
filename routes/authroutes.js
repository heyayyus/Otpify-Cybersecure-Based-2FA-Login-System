// Author: Aayush Jha
// Website: https://heyayyus.in

const express = require('express');
const { register, verifyOTP, resendOTP, login, logout, dashboard } = require('../controllers/authcontroller');
const authMiddleware = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/login', login);
router.post('/logout', logout);
router.get('/dashboard', authMiddleware, dashboard);

module.exports = router;

// This file defines the authentication routes for user registration, login, OTP verification, and dashboard access.
// It uses the authMiddleware to protect the dashboard route, ensuring only authenticated users can access it   