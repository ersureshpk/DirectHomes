const express = require('express');
const router = express.Router();
const User = require('../model/user')
const {addNewUser, verifyUser} = require('../controller/user')

 router.post('/register', addNewUser);
   
  router.get('/login', verifyUser)
   

    

 module.exports = router;



