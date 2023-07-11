const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = express()
dotenv.config()
mongoose.connect(process.env.DB_URL)
    .then(console.log("oky"))
    .catch(err => {
        console.log("error")
    })

app.listen(process.env.PORT, (req, res) => {
    console.log("Welcome Nodejs Samplee");
})