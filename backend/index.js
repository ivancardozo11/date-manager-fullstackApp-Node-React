import express from "express";

const app = express();

app.use('/', (req,res)=>{
    res.send("Hola mundo");
})
app.listen(4000, ()=>{
    console.log("Server running and working on port 4000 :🚀🚀🚀🚀")
});