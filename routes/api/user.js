const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, validateSignUpUser } = require('../utils/utils');
const db = require('../../db/models')
const bcrypt = require("bcryptjs");
const {getUserToken} = require("../utils/auth")

////////sign-up api////////////
routes.post('/signup', validateSignUpUser, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const { email, password, aboutMe, trainer, firstName, lastName, started_training_year, balance } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {email, hashedPassword, aboutMe, trainer, firstName, lastName, started_training_year, balance}
  const user = await db.User.create(userData);
  const token = getUserToken(user);

  res.status(201).json({
    token, userId:user.id
  })

}));

//////////log-in/////////////////////////////
routes.put("/",validateUserEmailAndPassword, handleValidationErrors, asyncHandler(async(req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await db.User.findOne({
    where: { email: email }
});
const passwordsMatch = await bcrypt.compareSync(password, user.hashedPassword.toString())
if (!user || !passwordsMatch) {
  const err = new Error("Login failed");
  err.status = 401;
  err.title = "Login failed";
  err.errors = ["The provided credentials were invalid."];
  return next(err);
}
const token = getUserToken(user);
res.json({
  token, userId:user.id
})
}))


/////////log-out//////////////////////????????????

module.exports = routes;