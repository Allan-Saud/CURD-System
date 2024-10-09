require("dotenv").config();
const express= require("express")
const app=express();
const PORT=8000;
const mongoose=require("mongoose");
require("./Db/conn")
const users= require("./models/userSchema")
const cors=require("cors");
const router=require("./routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT,()=>{
    console.log(`server is tarting at port number ${PORT}`);

})



