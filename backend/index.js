const express = require("express");


const app = express();
const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("Le serveur a démarré");
})

app.listen(PORT,()=>{
    console.log(`Serveur en écoute sur le port ${PORT}`);
})