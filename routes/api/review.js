const express = require('express');
const routes = express.Router();
const db = require('../../db/models');
const { check} = require('express-validator');
const { asyncHandler,handleValidationErrors } = require('../utils/utils');
const User = db.User
const validateRatingComment = [
    check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a rating'),
    check("comment")
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment')
]




/////////create review
routes.post("/submit", 
validateRatingComment,
handleValidationErrors,
asyncHandler(async(req,res,next)=>{

    const {rating,comment, planId, currentUserId} = req.body
await db.Review.create({
    rating,
    comment,
    planId,
    userId:currentUserId
})

const allReviews = await db.Review.findAll({
    where:{
        planId
    }
})

res.json(allReviews)
}))




///////grab reviews for id plan
routes.put("/", asyncHandler(async(req,res,next)=> {

    const planId = req.body.planId
    const allReviews = await db.Review.findAll({
        where:{
            planId
        },
        include:{
            model:User,
            attributes:['firstName']
        }
    })


    
    res.json(allReviews)
}))




module.exports = routes;
