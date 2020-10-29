const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const cors = require("cors");
const { ValidationError } = require("sequelize");
const app = express();

////////////////////////////////////////////////////////////
// app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParser())

// app.use(cors())
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//////////////routes////////////////////
app.get("/", (req,res) => {
  res.json({message:"hi"})
})
app.use(routes);

////////////////////////////////////////////////////////////

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  // console.log(err.errors)
  // res.json({
  //   message: err.message,
  //   error: JSON.parse(JSON.stringify(err)),
  // });
  res.json({error:err.errors})
});


module.exports = app;