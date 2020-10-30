const express = require('express');
const routes = express.Router();
const { asyncHandler } = require('../utils/utils');
const db = require('../../db/models')
const {User, Plan, Image,} = db

//grab all exercies with image url

routes.get("/all", asyncHandler(async (req,res,next) => {
    const list = await db.Exercise.findAll({
        include:Image
    });
    res.json(list)

}))

routes.post("/create", asyncHandler(async (req,res,next)=> {
    const {title, imageId,userId,description,currentPlanId} = req.body;

    const newExercise = await db.Exercise.create({
        title, imageId, description
    })
    const exerciseToPlan = await db.ExerciseToPlan.create({
        planId:currentPlanId,
        exerciseId:newExercise.id
    })

    console.log(req.body)
res.json({newExercise})
}))




module.exports = routes;
