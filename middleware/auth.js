const jwt = require('jsonwebtoken')
//const User = require('../apiServices/users/modelUser')

const authJwt = async (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({message: "No token provided"})
    }
    try{
        const verify = jwt.verify(token, "123456789")
        const payload =  jwt.decode(token, "123456789")
        console.log(payload.profile)
        req.body.profile = payload.profile
        next()
    }
    catch(e){
        console.log(e)
        return res.status(401).json({message: "Usuario no autorizado"})
    }
}

module.exports = authJwt