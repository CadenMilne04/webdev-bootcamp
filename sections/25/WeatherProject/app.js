const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,  res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    const query = req.body.cityName;
    const apiKey = "82b3e1dc51ca496f90dfd8a01b7f7f8f";
    const units = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=" + units;

    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data); 
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.send("<img src="+imageURL+">"+"<h1>The temperature in "+query+" is " + temp + " Degrees Farenheit. The weather is " + weatherDescription + "</h1>");
        });
    });
});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})