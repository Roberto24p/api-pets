const daoPets = require('./daoPets')
module.exports = {
   async createPet(req, res, next){
      const pet = req.body
      console.log(pet)
      if(pet.user == "" || pet.name == "") return res.status(400).json({message: "Datos incompletos"})
      try{
         await daoPets.add(req.body)    
         res.sendStatus(201)
      }catch(e){
         next(e)
      }
   },
   async getPetsAdoption(req, res, next){
      try{
         const result = await daoPets.getPetAdoption()
         res.status(200).json( {data: result})
         res.send(result)
      }catch(e){
         next(e)
      }
   }
}
