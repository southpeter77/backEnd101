const express = require('express');
const routes = express.Router();
const db = require('../../db/models');
const { asyncHandler} = require('../utils/utils');


routes.post("/create",asyncHandler(async(req,res,next) => {
    const {currentPlanId, currentUserId} = req.body
    // console.log(currentPlanId, currentUserId)

    const order = await db.Order.create({
        userId:currentUserId
    })

    const orderItems = await db.OrderItems.create({
        orderId:order.id,
        planId:currentPlanId
    })

        res.json(orderItems)
}))

////////get all orders;
const {OrderItems, Order, Plan, User} = db
routes.put("/all", asyncHandler( async(req,res,next) => {
    const {currentUserId} = req.body

    const orderItems = await Plan.findAll({
        include: {
            model:Order,
            where:{
                userId:currentUserId
            }
        }
    })
    res.json(orderItems)

}))











module.exports = routes;
