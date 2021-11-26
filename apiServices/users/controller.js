const daoUser = require('./daoUser')

module.exports = {
   async createUser(req, res, next){
     console.log(req.body)
     if(!req.body.username) return res.sendStatus(400)
     if(!req.body.password) return res.sendStatus(400)
     try{
         const result = await daoUser.add(req.body)
         res.sendStatus(201)
      }catch(e){
         console.log(e)
         next(e)
      }
   },
   async getAll(req, res, next){
      try{
         const result = await daoUser.getAll()
         res.send(result)
      }catch(e){
         next(e)
      }
   }

}
