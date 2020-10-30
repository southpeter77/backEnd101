const express = require('express');
const routes = express.Router();
const db = require('../../db/models');
const { asyncHandler} = require('../utils/utils');


routes.post("/create",asyncHandler(async(req,res,next) => {
    const {currentPlanId, currentUserId} = req.body
    console.log(currentPlanId, currentUserId)

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

    const order = await Plan.findAll({
        include: {
            model: OrderItems,
            attributes:[orderId]
        }
    })

    console.log(currentUserId)
    res.json(order)

}))











module.exports = routes;
