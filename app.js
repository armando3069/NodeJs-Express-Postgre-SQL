const { response } = require("express");
const express = require("express");
const router = require("./router");
const myrouter = require("./router");
const app = express();

app.get('/',(req,res)=>{
    res.send("hi");
});

app.listen(3000,(response)=>{
    console.log("server Run !");
});

app.use(express.json());

app.use('/my',myrouter);

