const express = require("express");
const mongoose = require("mongoose")
//const bodyParser = require('body-parser');
const app = express();


mongoose.connect("mongodb+srv://sky:skydesafio@cluster0-tjvtu.mongodb.net/usuario?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true})

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("Conexão feita com sucesso.")
})



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

  module.exports = app