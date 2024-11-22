const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose") 
require("dotenv").config(); //Charge les variablees d'environnement 
const PORT = process.env.PORT || 3000
const Task = require("./model/task")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://guerraiannis:Taskly10WEB@cluster0.t2nxc.mongodb.net/DatabaseTask?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connexion au cloud de MongoDb Atlas établie")})
.catch((err) => {
    console.log("Erreur de connexion à la base de donnée")
})

app.get("/",(req,res) => {
    res.send("Bienvenue sur mon serveur Express sur render ")
})

app.post("/task",(req,res) => {
    //const task = req.body;
    const task = req.body
    const firstTask = req.body[0].description
    
    try{
        // const newTask = new Task({description})
        // newTask.save()
        //const newTask = new Task({description: firstTask})
        //newTask.save()
        console.log(firstTask)
        console.log(req.body)
        res.status(200).json({ message: "Tâche reçu et sauvergardé avec succes ",Task: task });
        
    }catch(err){
        console.error("Mauvaise reception des données ",err);
    }
})

app.listen(PORT,() => {
    console.log(`Serveur lancé sur le port ${PORT}`)
})