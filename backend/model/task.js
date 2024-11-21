const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    description: String
})

const Task = mongoose.model("newTasks",taskSchema)

module.exports = Task