const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const User = require("../models/User");
// router.get("/", (req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => console.log(err));
// });

// router.post("/", (req, res) => {
//   const { name, email } = req.body;
//   const newUser = new User({
//     name: name,
//     email: email,
//   });
//   newUser
//     .save()
//     .then(() =>
//       res.json({
//         message: "Created account successfully",
//       })
//     )
//     .catch((err) =>
//       res.status(400).json({
//         error: err,
//         message: "Error creating account",
//       })
//     );
// });
// module.exports = router;
