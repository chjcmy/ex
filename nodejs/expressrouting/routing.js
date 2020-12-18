var express = require("express")
var ejs = require("ejs");
var app = express();

var controller1 = require("./router/controller1")(app);

app.get("/", function(req, res){
    res.send("ROOT");
})

app.get("/TEST1", function(req, res){
    res.send("TEST1");
})


var server = app.listen(3000, function(){

    console.log("서버가동")
})