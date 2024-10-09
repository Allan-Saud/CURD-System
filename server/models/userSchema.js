const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    address:{

    },
    description:{
        type:String,
        require:true
    }
})

const users=new mongoose.model("users",userSchema)

module.exports=users;