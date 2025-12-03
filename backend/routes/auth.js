// Importing required modules
const express = require("express"); // Importing Express framework
const router = express.Router(); // Creating a new router object
const User = require("../models/User"); // Importing the User model (MongoDB schema)
const { body, validationResult } = require("express-validator"); // Importing express-validator for input validation
const fetchUser=require('../middleware/fetchUser')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "thisis@secret*code#by$aditya";

// ============================================================
// 📌 Route: POST "/api/auth/createuser"
// Description: Create a new user (Signup form)
// Access: Public (No authentication required)
// ============================================================

router.post(
  "/createuser",
  [
    // Validation rules for user input fields
    body("name", "Please Enter Your full Valid name").isLength({ min: 3 }), // Name must be at least 3 characters
    body("email", "Enter your correct email address").isEmail(), // Email must be valid
    body("password", "Password should have minimum length of 5 !").isLength({
      min: 5,
    }), // Password must be at least 5 characters
  ],
  async (req, res) => {
    // Validate the request body and check for any errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // If there are validation errors, return 400 Bad Request with error details
      return res.status(400).json({ errors: result.array() });
    }

    try {
      // Check if a user already exists with the provided email
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // If user already exists, return an error response
        return res
          .status(400)
          .json({ error: "Sorry, the user already exists." });
      }

      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);
      // If user does not exist, create a new user using data from the request body
      user = User({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Save the user to the database
      await user.save();
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // Send a success response
      res.status(201).json({ authToken });
    } catch (error) {
      // Catch any unexpected errors and log them to the console
      console.error(error.message);

      // Send a 500 Internal Server Error response
      res.status(500).send("Internal Server Error");
    }
  }
);

// ============================================================
// 📌 Route: POST "/api/auth/login"
// Description: login a already existing user (Signup form)
// Access: Public (No authentication required)---- no login required
// ============================================================

router.post(
  "/login",
  [
    // Validation rules for user input fields
    body("email", "Enter your correct email address").isEmail(), // Email must be valid
    body("password", "Password cannot be empty !").exists(),
  ],
  async (req, res) => {
    // Validate the request body and check for any errors

    const result = validationResult(req);
    if (!result.isEmpty()) {
      // If there are validation errors, return 400 Bad Request with error details
      return res.status(400).json({ errors: result.array() });
    }

    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }

      const comparePass = await bcrypt.compare(password, user.password);
      if (!comparePass) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRET);
      res.status(200).json({ authToken });
      

    } catch (error) {
      // Catch any unexpected errors and log them to the console
      console.error(error.message);

      // Send a 500 Internal Server Error response
      res.status(500).send("Internal Server Error");
    }
  }
);

// ============================================================
// 📌 Route: POST "/api/auth/getuser"
// Description: getting information of user
// Access: Public (No authentication required)---- login required
// ============================================================


router.post('/getuser',fetchUser, async (req,res)=>{
  try {
    const userId=req.user.id;
    const data =await User.findById(userId).select("-password");
    res.json({data});
    
  } catch (error) {
    // Catch any unexpected errors and log them to the console
    console.error(error.message);

    // Send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
})



// Exporting the router to be used in other parts of the application
module.exports = router;
