const express = require('express')
//
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())

 //db Connect
const connectToDb = async()=>{
  try{
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/dbConnect');
    if(connection){
      console.log("connnectd to mongodb")
    }
  }catch(err){
    console.log(errr)
  }
}
connectToDb()
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String
});
 
const Users = mongoose.model('Users', userSchema);
 
console.log("connected to database")
app.use(express.json())

 
app.post('/register', async(req, res) => {
   const data=  await Users.create(req.body)
})

 
app.get('/users/:id',async (req, res) => {
const data = await Users.find()
res.json({userList: data})
})

 
app.put('/users',async (req, res) => {
   const data = await Users.findByIdAndUpdate(req.body.id, req.body)
  })
  
  app.delete('/users',async (req, res) => {
const data = await Users.findByIdAndDelete(req.body.id)
   })
   

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})