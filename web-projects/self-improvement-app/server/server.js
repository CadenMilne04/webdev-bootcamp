require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

//Mongoose Server Setup Section
mongoose.connect('mongodb+srv://cadenmilne04:'+process.env.MONGOOSE_KEY+'@cluster0.ro1tpr1.mongodb.net/selfImprovementApp');

//Google Passport Setup Section
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/callback",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// app.get('/auth/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//     // Successful authentication, redirect secrets.
//     res.redirect('/secrets');
//     });


//Login Page
app.get("/login", (req,res)=>{
  
});

//Testing Zone
app.get("/users", (req,res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
});

//Starter
app.listen(3001, () => {console.log("server started on port 3001");})