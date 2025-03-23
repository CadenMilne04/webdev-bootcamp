const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const passport = require("passport");

mongoose
    .connect(
        "mongodb+srv://cadenmilne04:PF4nYxO2XsiPYeiP@cluster0.ro1tpr1.mongodb.net/loginTestDB"
    )
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);

const collection = mongoose.model("collection", userSchema);

module.exports = collection;
