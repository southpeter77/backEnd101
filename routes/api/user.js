const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, validateSignUpUser,validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models')
const bcrypt = require("bcryptjs");
const {getUserToken} = require("../utils/auth");
const {User, Plan, Image,} = db

//test
routes.get('/', asyncHandler(async (req, res)=> {
 const users = await db.User.findByPk(1)
  // res.json({message:"wow"})
  res.json(users)
}));

////////sign-up api////////////
routes.post('/signup', 
validateSignUpUser, handleValidationErrors, 
asyncHandler(async (req, res, next) => {
  const { email, password, aboutMe, trainer, firstName, lastName, started_training_year, balance } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({email, hashedPassword, aboutMe, trainer, firstName, lastName, started_training_year, balance:0} );
    const token = getUserToken(user);

//
//add image.
const image = await db.Image.create({
  url:"defaultProfile",
  userId: user.id
})

// console.log(image)

//
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


if(user===null) {

  const err = new Error("Login failed");
  err.status = 401;
  err.title = "Login failed";
  err.errors = ["The provided credentials were invalid."];

  return next(err);
}
const passwordsMatch = await bcrypt.compareSync(password, user.hashedPassword.toString())
if (!passwordsMatch) {
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



//////////////grab user info from id//////////
routes.get("/:id", asyncHandler(async(req,res) => {
  const userId = parseInt(req.params.id);

  const user = await db.User.findByPk(userId, {
    include :[Plan, Image]
  });
  // console.log(user)
  
  res.json(user)
}))







/////////log-out//////////////////////????????????

module.exports = routes;