const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./model/task")

const app = express();
const PORT = 3000;
const Url = "mongodb://localhost:27017/taskly";

app.use(cors());
app.use(express.json());


mongoose.connect(Url)
                .then(()=>{
                    console.log("Connecté à la base de données")
                })
                .catch((err)=>{
                    console.log("erreur de connexion à la base de données")
                })

app.get("/",(req,res)=>{
    res.send("Le serveur a démarré");
})

app.post("/api/tasks",async (req,res) => {
    const description = req.body;

    try{
        const newTask = new Task({description});
        await newTask.save();

    }catch(err){
        console.log("erreur d'envoies des données",err);
    }
    console.log("Taches recu",description);
    res.status(201).json(description);
})

app.listen(PORT,()=>{
    console.log(`Serveur en écoute sur le port ${PORT}`);
})