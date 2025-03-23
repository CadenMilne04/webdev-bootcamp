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
    "mongodb+srv://cadenmilne04:PF4nYxO2XsiPYeiP@cluster0.ro1tpr1.mongodb.net/mentalHealthDB"
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
            "secret123"
        );

        res.json({ status: "ok", user: token });
    } else {
        res.json({ status: "error", user: false });
    }
});

//Server start
app.listen(3000, () => console.log("Server started on port 3000!"));
