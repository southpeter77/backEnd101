const express = require('express');
const routes = express.Router();
const { asyncHandler } = require('../utils/utils');
const db = require('../../db/models')
const {User, Plan, Image,Exercise} = db

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

routes.delete("/delete/", asyncHandler(async(req,res,next) => {
    const id = req.body.id;
   
   const exercise = await db.Exercise.findByPk(id)
   const exercisePlan = await db.ExerciseToPlan.findOne({
       where:{
           exerciseId:id
       }
   })

exercisePlan.destroy();
exercise.destroy();
    res.json({message:"hi"})
}))


module.exports = routes;
