// Author: Aayush Jha
// Website: https://heyayyus.in


module.exports = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized. Please log in first." });
    }
    next();
};


// This middleware checks if the user is authenticated by checking the session.
// If the user is not authenticated, it sends a 401 Unauthorized response.      