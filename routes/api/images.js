const express = require('express');
const routes = express.Router();
const { asyncHandler } = require('../utils/utils');
const db = require('../../db/models')
const {User, Plan, Image} = db
const multer = require("multer");
const upload = multer();



routes.get("/all", asyncHandler(async (req,res,next) => {
    const list = await db.Image.findAll();
    res.json(list)

}))

//upload profile pic
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config");

AWS.config.update({
    secretAccessKey: awsKeys.secretAccessKey,
    accessKeyId: awsKeys.accessKeyId,
    region: awsKeys.region,
  }); // UPDATING CONFIG FOR S3
  
const s3 = new AWS.S3(); // CONSTRUCTS A SERVICE OBJECT

const fileFilter = (req, res, next) => {
    // CUSTOM CHECK FOR THE MIME TYPES
    const file = req.files[0];
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      next();
    } else {
      next({ status: 422, errors: ["Invalid Mime Type, only JPEG and PNG"] });
    }
  };
  

routes.put("/upload", 
upload.any(),// PARSES FORM DATA IN REQ.BODY AND REQ.FILES
fileFilter,
asyncHandler(async(req,res,next) => {


    // GET FILE REFERENCE
    const file = req.files[0];

    //CREATE PARAMS OBJECT FOR S3
    const params = {
      Bucket: "athlete101image",
      Key: Date.now().toString() + file.originalname, // UNIQUELY IDENTIFIES AN OBJECT IN THE BUCKET
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };

    const promise = s3.upload(params).promise(); // CREATE A PROMISE FROM THE UPLOAD
    const uploadedImage = await promise;
    const url = uploadedImage.Location
    const id = req.body.userId

    const image = await db.Image.findOne({
        where: {
            userId:id
        }
    })

    await image.update({
        url
    })

    res.json(image)

}))


module.exports = routes;
