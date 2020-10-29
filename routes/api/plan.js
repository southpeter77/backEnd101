const express = require('express');
const routes = express.Router();
const db = require('../../db/models')
const { asyncHandler,handleValidationErrors } = require('../utils/utils');
const {Image, Category, User} = db
const {requireAuth} = require("../utils/auth");
const { check, validationResult } = require('express-validator');



////////grab top rating plans
routes.get("/top", asyncHandler (async (req,res)=> {
    
    const plans = await db.Plan.findAll({
        include: [Image,Category, User]
    });
    res.json(plans)
}))


//create plan


routes.post("/create", asyncHandler(async(req,res,next) => {
 const {userId,title, price, category, description} = req.body;
 const plan = await db.Plan.create({
    ownerUserId:userId,
     title,
     price,
     categoryId: category,
     description
 })
    res.json(plan)
}))







module.exports = routes;