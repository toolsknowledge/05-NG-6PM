//nodejs
//import the modules
//require() function used to import the modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


//rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest apis  GET,POST,PUT,DELETE,......


//enable the cors policy
app.use(cors());


//create the connection object
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"ng6pm"
});

//connect to the data base
connection.connect();


//create the get request
app.get("/api/products",(req,res)=>{
    connection.query(`select * from products`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    });
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});


