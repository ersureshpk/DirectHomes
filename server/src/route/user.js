const express = require('express');
const router = express.Router();
const User = require('../model/user')
const addNewUser = require('../controller/user')

router.post('/users', addNewUser)
   
 router.get('/users/:id')
   
 router.put('/change-pass/:id')
   
 router.delete('/users/:id')
    

 module.exports = router;



