const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    description: String
})

const Task = mongoose.model("Task",taskSchema)

module.exports = Task