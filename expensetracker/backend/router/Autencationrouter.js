const express = require('express');
const router = express.Router();
const Authentication = require('../model/Authencation');  

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(401).send("Username or password is missing");
    }

    const user = await Authentication.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid username or password");
    }

   

    return res.status(200).send("Login successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});


router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(401).send("Username or password is missing");
    }

    const existingUser = await Authentication.findOne({ username });
    if (existingUser) {
      return res.status(409).send("Username already exists");
    }

    const newUser = new Authentication({ username, password });
    await newUser.save();

    return res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;
