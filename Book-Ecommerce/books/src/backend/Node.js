const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send("<h1>Hello from 8000</h1>");
})

app.listen(8000,(req,res) =>{
    console.log("Successfully run.");
});