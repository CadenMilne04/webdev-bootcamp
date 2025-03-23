const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
  })

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The answer to that calculation is: " + result);
})

app.post('/bmiCalculator', function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = 703 * (weight/(height * height));

    res.send("Your BMI is: " + result);
})

  app.listen(3000, () =>
  console.log('Calculator app listening on port 3000!'),
)