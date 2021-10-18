const daoPets = require('./daoPets')
module.exports = {
   async createPet(req, res){
      const result = await daoPets.add(req.body)    
      res.status(result.code)
      res.send(result)
   },
   async getPetAdoption(req, res){
      const result = await daoPets.getPetAdoption()
      res.send(result)
   }
}
