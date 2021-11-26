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
   },
   async getById(req,res, next){
      const  {profile}  = req.body
      console.log(profile)
      if(profile == '') return res.status(400).json( {message: 'Datos incompletos'} )
      try{
         const profileR = await daoProfile.getById(profile)
         res.status(200).json( {message: profileR} )
      }catch(e){
         console.log(e)
         next(e)
      }
   },
   async update(req, res, next){
      const { profile } = req.body
      if(profile==null) return res.status(400).json( {message: 'Datos Incompletos'})
      try{
         console.log(profile)
         const profileR = await daoProfile.putProfile(req.body)
         res.status(200).json( {message: "Actualizado con exito"})
      }catch(e){
         next(e)
      }
   }
}
