const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("User: ", user);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(401);
    res.send("User validation failed. Please check your data");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
});

// router.get("/test", async (req, res) => {
//   try {
//     res.json({});
//   } catch (error) {
//     res.send(error.message);
//   }
// });

module.exports = router;
