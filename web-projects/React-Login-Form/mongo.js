const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cadenmilne04:PF4nYxO2XsiPYeiP@cluster0.ro1tpr1.mongodb.net/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
