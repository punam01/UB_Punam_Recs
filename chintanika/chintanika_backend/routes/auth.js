const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a user using: post "/api/auth/createuser". no login required
router.post(
  "/createuser",
  [
    body("name", "name length should be minimum 5").isLength({ min: 5 }),
    body("email", "email format ->name@test.com").isEmail(),
    body("password", "password length must be greater than 5").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    //if there are error -->return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check if user with same email exists await for promise
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }
      //create a new user
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ nice: "nice" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);

module.exports = router;
