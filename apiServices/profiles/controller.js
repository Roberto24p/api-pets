const daoProfile = require('./daoProfile')

module.exports = {
   async createUser(req, res){
     console.log(req.body)
        const result = await daoProfile.add(req.body)
        res.status(result.code)
        res.send(result)
   },
   async getAll(req, res){
      const result = await daoProfile.getAll()
      res.send(result)
   },
   async interested(req, res){
       const result = await daoProfile.addInterested(req.body)
       res.send(result)
   }

}
