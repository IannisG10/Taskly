const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Task = require("./model/task")

mongoose.connect("mongodb+srv://guerraiannis:Taskly10WEB@cluster0.t2nxc.mongodb.net/DatabaseTask?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connexion à la base de donnée établie")
})
.catch(err => console.log("Erreur de connexion à la base de donnée",err))

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Le serveur de test est en ecoute sur le port 3001")
})

//Route pour recupérer les données 
app.get('/task', async (req,res) => {
    try{
        const task = await Task.find()
        //res.status(200).json({message: 'Voici les données recu',taches: task})
        res.json(task)
    }catch(err){
        console.log("Erreur lors de la recuperation des données")
    }
})

app.post('/task',(req,res) => {
    const {id,description,tags,TagList,date,isFav,isDone} = req.body
    const d = req.body
    try{
        
        console.log(d)
        const newTask = new Task({
            _id: id,
            descri: description,
            tague: TagList,
            tagValue: tags,
            date: date,
            favoris: isFav,
            Fais: isDone
        })
        newTask.save()
        res.status(200).json({message: "Voici les données",task: d})

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