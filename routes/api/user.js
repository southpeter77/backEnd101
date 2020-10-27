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

routes.get("/", (req, res) => {

})

module.exports = routes;