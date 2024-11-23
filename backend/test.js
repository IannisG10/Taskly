const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3001
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Le serveur de test est en ecoute sur le port 3001")
})

app.post('/task',(req,res) => {
    const {description} = req.body
    try{
        console.log("Voici ma donnée:",description)
        res.status(200).json({message: "Voici les données",task: description})

    }catch(err){
        console.log("Un erreur s'est produite")
    }
})

app.listen(PORT,()=>{
    try{
        console.log(`Serveur démarré sur le port ${PORT} pour un test REST API`)
    }catch(err){
        console.log("Erreur lors du lancemnt du serveur de test")
    }
})