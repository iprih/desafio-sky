const express = require("express");
const bodyParser = require('body-parser');
const app = express();


//aqui ficara o link do mongoose


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

  module.exports = app