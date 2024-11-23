const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    descri: String
})
// Creation d'un modele ou d'une collection pour MongoDB 
const Task = mongoose.model("tache",taskSchema)

module.exports = Task