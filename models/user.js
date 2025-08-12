// Author: Aayush Jha
// Website: https://heyayyus.in

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String }, // OTP for verification
    otpExpiry: { type: Date }, // Expiry time for OTP
    isVerified: { type: Boolean, default: false } // Email verification status
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

// This model defines the structure of a User document in MongoDB using Mongoose.
// It includes fields for name, email, password, OTP for verification, OTP expiry time, 
// and a boolean to indicate if the email has been verified. The email field is unique to prevent duplicate registrations.