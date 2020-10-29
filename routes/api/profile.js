const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, validateSignUpUser,validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models')
const bcrypt = require("bcryptjs");
const {getUserToken, requireAuth} = require("../utils/auth");
const {User, Plan, Image,} = db

const aboutMe = check("data").notEmpty().withMessage("Please Provide about me");

    

routes.put("/aboutme", 
aboutMe, 
handleValidationErrors, 
requireAuth , 
asyncHandler(async(req,res,next)=> {
const {userId, token, data} = req.body

const user = await db.User.findByPk(userId);
await user.update({
    aboutMe: data
})

res.json(user)

}))








module.exports = routes;