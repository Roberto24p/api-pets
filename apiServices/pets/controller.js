const daoPets = require('./daoPets')
module.exports = {
   async createPet(req, res){
      const result = await daoPets.add(req.body)    
      res.status(result.code)
      res.send(result)
   },
   async getPet(req, res){
      const result = await daoPets.get()
      res('ok')
   }
}
