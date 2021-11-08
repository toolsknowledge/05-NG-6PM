//nodejs
//import the modules
//require() function used to import the modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jwt-simple");
const user = require("./userModel");

//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest api's


//enable cors policy
app.use(cors());


//set the "json" as MIME type
app.use(express.json());


//connect to mongodb database
mongoose.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/05-ng-6pm?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});



//create the post request
app.post("/login",async (req,res)=>{
    const record = await user.find();
    console.log(record);
   if(!record){
        res.status(400).send({"login":"fail"});
    }else{
        res.status(200).send({"login":"success"});
    }
});



//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
