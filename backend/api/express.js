const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/",(req,res) => {
    res.send("Hello from Express");
})

app.get("/api/hello",(req,res) => {
    res.json({ message: 'Hello from the API'})
})

module.exports = app;
module.exports.handler = serverless(app);