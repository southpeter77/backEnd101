const express = require('express');
const routes = express.Router();
const { asyncHandler } = require('../utils/utils');
const db = require('../../db/models')
const {User, Plan, Image,} = db







//grab all category/

routes.get("/all", asyncHandler(async (req,res,next)=> {
    const list = await db.Category.findAll();

    res.json(list);
}))

module.exports = routes;
