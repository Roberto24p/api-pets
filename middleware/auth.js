const jwt = require('jsonwebtoken')
//const User = require('../apiServices/users/modelUser')

const authJwt = async (req, res, next)=>{
    const auth = req.get('authorization')
    if(!auth){
        return res.status(403).json({message: "No token provided"})
    }
    try{
        const token = jwt.verify(auth, "123456789")
        console.log(token )
        next()
    }
    catch(e){
        return res.status(401).json({message: "Usuario no autorizado"})
    }
}

module.exports = authJwt