const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config(); //Charge les variablees d'environnement 
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
    res.send("Bienvenue sur mon serveur Express sur render ")
})

app.post("/task",(req,res) => {
    const task = req.body;
    console.log("Type de données reçues :", typeof task)
    try{
        console.log("Données reçus :",task)
        res.status(201).json({message: "Tâches ajoutées avec succes"})
    }catch(err){
        console.error("Mauvaise reception des données ",err);
    }
} )

app.listen(PORT,() => {
    console.log(`Serveur lancé sur le port ${PORT}`)
})