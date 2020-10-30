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
    const {title,imageId,userId,description} = req.body;

    const newExercise = await db.Exercise.create({
        title, imageId, description
    })

    console.log(req.body)

}))




module.exports = routes;
