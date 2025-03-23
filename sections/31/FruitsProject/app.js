const mongoose = require('mongoose'); 

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Forgot to add a name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "apple",
    rating: 10,
    review: "apple is so yum"
});

apple.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: apple
});

person.save();

// Fruit.find()
//     .then(function (fruits) {
//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         })
//     })
//     .catch(function (err) {
//         console.log(err);
// });

// Fruit.updateOne({_id: "648b6f995d7872c38087e9f6"}, {name: "Peach"})
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// Fruit.deleteOne({name:"Peach"})
//     .then(result=>{
//         console.log(result)
//     })


