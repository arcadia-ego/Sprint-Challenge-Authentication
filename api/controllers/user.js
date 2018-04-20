const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const credentials = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  
  const user = new User(credentials);
  user
    .save()
    .then(savedUser => {
      //make a token here
      res.status(201).json({ savedUser });
    })
    .catch(err => res.status(500).json({ err: "username taken" }));
};

module.exports = {
  createUser
};
