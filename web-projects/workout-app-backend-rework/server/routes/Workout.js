const express = require("express");
const router = express.Router();

router.get("/Workout", (req,res)=>[
    res.send({data: "Here Ya Go!"})
])

module.exports = router;
//const workoutRoute = require("./routes/Workout");
//app.use("/workout", workoutRoute)
