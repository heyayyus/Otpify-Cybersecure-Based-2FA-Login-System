## 👨‍💻 Author  
**Aayush Jha**  
🔗 [heyayyus.in](https://heyayyus.in)

---

# 🔐 OTP Verification System (Node.js + MongoDB)

This project is a **Cybersecurity-focused authentication system** that enhances login protection using **Email-based One-Time Passwords (OTP)**. It helps prevent unauthorized access, phishing attacks, and password breaches by adding an extra verification layer during login.

Built using **Node.js**, **Express.js**, and **MongoDB**, this system showcases the core concepts of **Two-Factor Authentication (2FA)** — a widely adopted standard in modern web security.

---

## 🛡️ Why It’s a Cybersecurity Project

- 🧠 Prevents brute-force login attempts by requiring OTP
- ✉️ Ensures only the rightful user (with email access) can login
- 🔒 Encrypts user credentials and session data
- 🔁 OTPs are short-lived, used only once, and can expire
- 🌐 Real-world relevance: Used by banks, SaaS platforms, and critical web apps

---

## 📁 Project Structure

otp-verification/
│
├── config/
│ └── db.js → MongoDB connection logic
│
├── controllers/
│ └── authcontroller.js → Handles register/login, sends OTP
│
├── middleware/
│ └── authmiddleware.js → Protects routes using tokens/sessions
│
├── models/
│ └── user.js → Mongoose schema for user & OTP
│
├── routes/
│ └── authroutes.js → All user-related API endpoints
│
├── views/ → Frontend login/OTP forms (EJS/HTML)
│
├── app.js → Main server entry point
├── note.txt → Developer notes
├── package.json → Project metadata & dependencies
├── package-lock.json → Dependency versions lock
└── node_modules/ → Installed npm libraries


---

## ✅ Features

- 🔐 Secure user registration & login
- ✉️ Email-based OTP for 2FA
- ⏰ Optional OTP expiration
- 🔁 OTP is used only once
- ⚙️ Node.js + Express.js modular backend
- 🌍 Easily scalable & production-ready
- 💡 Clean structure ideal for learning or portfolio

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Email**: Nodemailer
- **Security Concepts**: OTP, Session Handling, Token Auth (Optional)

---

## 🚀 Getting Started

1. Clone this repo or download ZIP  
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create `.env` file with:
    ```env
    MONGO_URI=your_mongodb_connection
    EMAIL_USER=youremail@example.com
    EMAIL_PASS=your_email_password_or_app_password
    ```
4. Start the server:
    ```bash
    npm start
    ```

---

## 📬 API Endpoints (Basic)

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/register`    | Register a new user          |
| POST   | `/login`       | Login + Send OTP to Email    |
| POST   | `/verify-otp`  | Verify OTP entered by user   |

---

## 🧠 Use Cases

- 🔐 Banking login protection  
- 👥 Admin or internal dashboard login  
- 📦 SaaS platform onboarding  
- 👨‍💼 Corporate account security  

---

## ✍️ Author Note

This project was built for educational and professional learning in Cybersecurity. It demonstrates how to go beyond basic password login systems by implementing OTP-based verification — an industry-standard approach for account protection.

Let’s keep building secure apps together 💪

---
e are using a combination of algorithms. For password storage, we used the bcrypt hashing algorithm to securely hash and salt user passwords, so that they are never stored in plain text. For OTP generation, we used a cryptographically secure random number generator provided by Node.js (crypto module) to generate a 6-digit one-time password. OTP validation is done by matching the generated code with the stored temporary code within its expiry time window. The mailing part uses Nodemailer to send OTPs to the user’s email."