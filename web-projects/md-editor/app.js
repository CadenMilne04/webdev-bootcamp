const express = require("express");
const  bodyParser = require("body-parser")

const app = express();

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/src/index.jsx");
});

app.listen(3000, () => console.log("Server stated on port 3000!"))