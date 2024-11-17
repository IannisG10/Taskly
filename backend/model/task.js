const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    id: Number,
    description: String
})

const Task = mongoose.model("Task",taskSchema)

module.exports = Task