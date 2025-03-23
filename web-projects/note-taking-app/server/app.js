require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

//Initialize Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize Cors
app.use(
    cors({
        orgin: "http://localhost:3000",
    })
);

//Initialize Session and Passport
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Get Database Data
const data = require("./mongo");

//Use the Passport
passport.use(data.Users.createStrategy());

passport.serializeUser(data.Users.serializeUser());
passport.deserializeUser(data.Users.deserializeUser());

//get routes
app.get("/", cors(), (req, res) => {});

app.get("/getPublicNotes", (req, res) => {
    try {
        data.Notes.find({ isPublic: true }).then((foundNotes) =>
            res.json(foundNotes)
        );
    } catch (error) {
        res.json(error);
    }
});

//post routes
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    //Registering User via passportLocalMongoose
    data.Users.register({ username: username }, password, (err, user) => {
        if (err) {
            console.log(err);
            res.json("this account already exists");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.json(user);
            });
        }
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = new data.Users({
        username: username,
        password: password,
    });
    req.login(user, function (err) {
        if (err) {
            console.log(err);
            res.json("invalid username or password");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.json(user);
            });
        }
    });
});

app.post("/addNote", (req, res) => {
    const { user, title, body, datetime, checked } = req.body;

    const note = {
        userName: user,
        noteTitle: title,
        noteBody: body,
        time: datetime,
        isPublic: checked,
    };

    try {
        data.Notes.insertMany([note]);
        res.json("success");
    } catch (e) {
        res.json(e);
    }
});

app.post("/getNotes", (req, res) => {
    const { user } = req.body;
    try {
        data.Notes.find({ userName: user })
            .then((foundNotes) => {
                res.json(foundNotes);
            })
            .catch((e) => console.log(e));
    } catch (error) {
        res.json(error);
    }
});

app.post("/deleteNote", (req, res) => {
    const { deletingId } = req.body;
    data.Notes.findOneAndDelete({ _id: deletingId })
        .then(e=>{
            res.json(e);
        })
        .catch((err) => res.json(err));
});

app.listen(3001, () => console.log("server started on port 3001"));
