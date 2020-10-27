const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const db = require('../../db/models')
const bcrypt = require("bcryptjs");

////////sign-up api////////////
routes.post('/signup', (req, res, next) => {
  // const {email, password, aboutMe, trainer, firstName, lastName, started_training_year, balance} = req.body;
  // const user = {email, password, aboutMe, trainer, firstName, lastName, started_training_year, balance}
  const result = req.body
  
  console.log(result)

  res.json(result)
});

routes.get("/", (req,res) => {
  console.log("hi")
  const data =JSON.parse(req.body);
  

})

module.exports = routes;