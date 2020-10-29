const express = require('express');
const routes = express.Router();
const db = require('../../db/models')
const { asyncHandler } = require('../utils/utils');
const {Image, Category, User} = db
////////grab top rating plans
routes.get("/top", asyncHandler (async (req,res)=> {
    
    const plans = await db.Plan.findAll({
        include: [Image,Category, User]
    });
    res.json(plans)
}))



module.exports = routes;