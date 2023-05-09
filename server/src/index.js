const express = require('express')
// const port = 8080

// const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

const userRoute = require('./route/user')
const dbConnect = require('./connection/dbConnect')
const addNewUser= require('./controller/user')
const User = require('./model/user');
require('dotenv').config();
console.log(process.env.PORT);

app.use(cors())
app.use(express.json());
app.use("/", userRoute);
dbConnect()
 //

console.log("connected to database")
app.use(express.json())

  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
