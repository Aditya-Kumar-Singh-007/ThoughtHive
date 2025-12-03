// ============================================================
// 📌 Middleware: fetchUser
// Description: This middleware verifies the JWT token sent by the client,
//              decodes the user's information from it, and attaches it to `req.user`.
//              It ensures that only authenticated users can access certain routes.
// ============================================================

const jwt = require("jsonwebtoken");  // Importing the jsonwebtoken library
const JWT_SECRET = "thisis@secret*code#by$aditya";  // Secret key used for verifying JWT

// Middleware function definition
const fetchUser = (req, res, next) => {

    // Get the token from the request header (client must send it in 'auth-token')
    const token = req.header('auth-token');
    
    // If the token is missing, respond with a 401 Unauthorized error
    if (!token) {
        return res.status(401).json({ error: "Validation Failed, Please try again." });
    }

    try {
        //  Verify the token using the secret key
        //    If valid, jwt.verify() returns the decoded payload (which includes user data)
        const data = jwt.verify(token, JWT_SECRET);

        //  Extract the user info from the decoded data and attach it to the request object
        //    This allows the next route (like /getuser) to access `req.user`
        req.user = data.user;

        // Call next() to pass control to the next middleware or route handler
        next();

    } catch (error) {
        //  If token verification fails (invalid or expired token),
        //    log the error and send a 500 Internal Server Error response
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

// Export the middleware so it can be used in other files (e.g., in routes)
module.exports = fetchUser;
