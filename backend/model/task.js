const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    description: String
})

const Task = mongoose.model("tache",taskSchema)

module.exports = Task