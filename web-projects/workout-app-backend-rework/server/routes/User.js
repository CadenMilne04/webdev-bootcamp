const express = require("express");
const router = express.Router();

router.get("/User", (req,res)=>[
    res.send({data: "Here Ya Go!"})
])

module.exports = router;
//const userRoute = require("./routes/User");
//app.use("/User", userRoute)
