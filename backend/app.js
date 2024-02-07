const express = require("express");
const app =express();


app.get("/api",(req,res)=>{
    res.json({
        success :1,
        message: "this is working"
    });
});

app.listen(3000,()=>{
    console.log("server is running")
})