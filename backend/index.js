const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Le serveur a démarré");
})

app.post("/api/tasks",(req,res) => {
    const newTask = req.body;
    console.log("Taches recu",newTask);
    res.status(201).json(newTask);
})

app.listen(PORT,()=>{
    console.log(`Serveur en écoute sur le port ${PORT}`);
})