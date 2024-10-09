const mongoose= require("mongoose")

const DB="mongodb+srv://allansaud:allan12345@cluster0.jb9nqxt.mongodb.net/mernstack"

mongoose.connect(DB,{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongoDB connected")
}).catch((error)=>{
    console.log(error.message);
})
