const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
//Middleware
app.use(express.json());
app.use(cors());

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/")

app.get("/",(req,res)=>{
    res.send("Serveur demarré sur le port 3000")
})

app.post("/api/tasks",(req,res)=>{
    
    try{
        const desc = req.body;
        console.log("Tâches reçu",desc);
    }catch(err){
        console.error("Erreur de reception des données",err);
    }
})

app.listen(PORT,()=>{
    try{
        console.log(`Serveur en écoute sur le port ${PORT}`);
    }catch(err){
        console.error("Probleme d'acces au serveur");
    }
})