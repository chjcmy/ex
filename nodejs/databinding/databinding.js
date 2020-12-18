var express = require("express");
var app = express();
var ejs = require("ejs");
var session = require("express-session");


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(session({
	secret : "abcdefg",
	resave : false,
	saveUninitialized : false
}));

let router = require("./router/controller")(app);

let server = app.listen(5000, function(){
	console.log("서버가 가동되었습니다");
});