const addNewUser = async(req, res) => {
    const data=  await Users.create(req.body)
 }
 module.exports = addNewUser