const express = require('express')

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at 343 434 2333!");
});

app.get("/about", function(req, res){
    res.send("My name is caden milne! I am a web developer lawl!");
});

app.get("/hobbies", function(req, res){
    res.send("I like to skate!");
});

app.listen(3000, function(){
    console.log("Server Started on Port 3000.");
});