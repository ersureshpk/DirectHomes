const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
require('dotenv').config()
const userRoute=require('./route/user')
const dbConnect = require('./connection/dbConnect')

dbConnect()
app.use(express.json());
app.use(cors())
app.use("/",userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




