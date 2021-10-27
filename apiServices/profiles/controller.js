const daoProfile = require('./daoProfile')

module.exports = {
   async getAll(req, res, next){
      try{
         const result = await daoProfile.getAll()
         res.send(result)
      }catch(e){
         next(e)
      }
   },
   async interested(req, res, next){
      const {pet , id} = req.body
      if( pet=="" ||id=="" )return res.status(400).json( {message: "Datos incompletos"} ) 
      try{
         await daoProfile.addInterested(req.body)
         res.sendStatus(201)  
      }catch(e){
         next(e)
      }
   }
}
