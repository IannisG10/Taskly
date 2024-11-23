const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    _id: Number,
    descri: String,
    tags: [String],
    date: String,
    favoris: Boolean,
    Fais: Boolean
})
// Creation d'un modele ou d'une collection pour MongoDB 
const Task = mongoose.model("tache",taskSchema)

module.exports = Task