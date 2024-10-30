const express = require("express");
const app = express();

require("dotenv").config(); //Charge les variablees d'environnement 
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome on my express serveur from render")
})

app.listen(PORT,() => {
    console.log(`Serveur lancé sur le port ${PORT}`)
})