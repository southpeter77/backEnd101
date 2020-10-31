const express = require('express');
const routes = express.Router();
const db = require('../../db/models')
const { asyncHandler,handleValidationErrors } = require('../utils/utils');
const {Image, Category, User,ExerciseToPlan, Exercise} = db
const {requireAuth} = require("../utils/auth");
const { check, validationResult } = require('express-validator');

///grab my planss/////
routes.put("/myplan", asyncHandler( async (req,res,next) => {
    const {myId} = req.body
    const allMyPlans = await db.Plan.findAll({where:{ownerUserId:myId}})
    res.json(allMyPlans)
}))

////////grab top rating plans
routes.get("/top", asyncHandler (async (req,res)=> {
    
    const plans = await db.Plan.findAll({
        include: [Image,Category, User]
    });
    res.json(plans)
}))
///////////grab plan by id
routes.get("/:id", asyncHandler(async (req,res) => {
const id = req.params.id;

const planCategoryUser = await db.Plan.findByPk(id,{
    include:[Category, User, Exercise]
})
const planOwner = {
    planDescription: planCategoryUser.description,
    planTitle: planCategoryUser.title,
    planOwnerFirstName:planCategoryUser.User.firstName,
    planOwnerLastName: planCategoryUser.User.lastName,
    planOwnerAboutMe: planCategoryUser.User.aboutMe,
    planOwnerYear: planCategoryUser.User.started_training_year,
    planCategory: planCategoryUser.Category.categoryName,
    exercises: planCategoryUser.Exercises

}
res.json(planOwner)

}))

//create plan////////////////////////
routes.post("/create", 

asyncHandler(async(req,res,next) => {
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

//delete plan /////////////////
routes.delete("/delete",
asyncHandler(async(req,res,next) => {
    const {id} = req.body;
    console.log(id)
}))


module.exports = routes;