import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000


conectarDB();

app.use('/', (req,res)=>{
    res.send("Hola mundo");
})

app.listen(PORT, ()=>{
    console.log(`Server running and working on port ${PORT} :🚀🚀🚀🚀`)
});