require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

//Initialize App
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Initialize Mongoose
mongoose.connect(
    "mongodb+srv://cadenmilne04:"+process.env.MONGOOSE_KEY+"@cluster0.ro1tpr1.mongodb.net/jwtTestDB"
);

//Routes
app.post("/api/register", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({ status: "ok" });
    } catch (error) {
        res.json({ status: "error", error: "Duplicate email" });
    }
});

app.post("/api/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET
        );

        res.json({ status: "ok", user: token });
    } else {
        res.json({ status: "error", user: false });
    }
});

app.get("/api/quote", async (req, res) => {
    const token = req.headers["x-access-token"];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({ status: "ok", quote: user.quote });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: "Invalid Token" });
    }
});

app.post("/api/quote", async (req, res) => {
    const token = req.headers["x-access-token"];

    try {
        const decoded = jwt.verify(token, "secret123");
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        );

        return res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: "Invalid Token" });
    }
});

app.get("/api/allQuotes", async (req, res) => {
    try {
        const users = await User.find({});
        return res.json({ status: "ok", users: users });
    } catch (error) {
        res.json({ status: "error", error: "Couldn't get all the users" });
    }
});

//Server start
app.listen(3000, () => console.log("Server started on port 3000!"));
