require('../mongoDb/index')
const jwt = require('jsonwebtoken')
const User = require('../apiServices/users/modelUser')
const login = async (req, res)=>{
    const { username, password } = req.body
    const user = await User.findOne( {username: username} )
    const passwordCorrect = user.password == password?true:false

    if(!passwordCorrect && user){
        res.send({error: "Usuario o password incorrectas"})
    }
    const token = jwt.sign({username: user.username, profile: user.profile}, '123456789')
    res.send({
        name: user.username,
        user: user.profile,
        token: token
    })
    
}

module.exports = login
