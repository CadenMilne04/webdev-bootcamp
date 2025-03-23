require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")

//Connect to the noteTakerDB on MongoDB
mongoose
    .connect(
        "mongodb+srv://cadenmilne04:" +
            process.env.MONGODB_PASSWORD +
            "@cluster0.ro1tpr1.mongodb.net/noteTakerDB"
    )
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    });

//Users Model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
userSchema.plugin(passportLocalMongoose);

const Users = mongoose.model("User", userSchema);

//Notes Model
const noteSchema = new mongoose.Schema({
    userName: String,
    noteTitle: String,
    noteBody: String,
    time: String,
    isPublic: Boolean
});

const Notes = mongoose.model("Note", noteSchema);


//Export models, acces via data.Users, or data.Notes
exports.Users = Users;
exports.Notes = Notes;
