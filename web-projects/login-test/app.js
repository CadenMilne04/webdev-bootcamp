const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    secret: "thisisalongstring.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(collection.createStrategy());

passport.serializeUser(collection.serializeUser());
passport.deserializeUser(collection.deserializeUser());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    await collection
        .findOne({ email: email })
        .then((foundUser) => {
            if (foundUser.password == password) {
                res.json("exist");
            } else {
                res.json("incorrectdetails");
            }
        })
        .catch((e) => {
            res.json("notexist");
        });
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password,
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("notexist");
    }
});

app.listen(3001, () => {
    console.log("port connected");
});
