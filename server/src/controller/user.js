const User = require('../model/user')
const bcrypt = require('bcrypt')

const addNewUser = async(req, res) => {
   
    try{
        const userExists = await User.find({$or:[{email: req.body.email }, {phoneNumber: req.body.phoneNumber}]})
        // const userExists = await User.exists({email: req.body.email} && {phoneNumber: req.body.phoneNumber} )
       
                if(!userExists.length == 0){
                    const hash = bcrypt.hashSync(req.body.password, 10);
                    req.body.password = hash
                    const data= await User.create(req.body)
                    if(data) {
                        res.json({
                            msg: "registered successfully"
                        })
                    }
                    else{
                    res.sendStatus(409)
                    }   }
   
   }catch(err){
    console.log(err)
        }
    }

    

const verifyUser = async(req, res)=>{
    try{
        const userExists = await User.find(({$or:[{email: req.body.email }, {phoneNumber: req.body.phoneNumber}, {userName: req.body.userName}]}))
            if(!userExists.length == 0){
                const hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash
                const data= await User.create(req.body)
                if(data) {
                    res.json({
                        msg: "login successfully"
                    })
                }
                else{
                res.sendStatus(409)
                }   }

            }catch(err){
            console.log(err)
            }
}




module.exports = {
    addNewUser,
    verifyUser
}