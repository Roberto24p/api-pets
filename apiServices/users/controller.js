const daoUser = require('./daoUser')

module.exports = {
   async createUser(req, res){
     console.log(req.body)
     if(!req.body.username) return res.sendStatus(400)
     if(!req.body.password) return res.sendStatus(400)
        const result = await daoUser.add(req.body)
        res.status(result.code)
        res.send(result)
   },
   async getUser(req, res){

   }

}
