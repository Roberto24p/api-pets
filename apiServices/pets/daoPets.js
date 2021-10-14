require('../../mongoDb/index')
const petModel = require('./modelPets')
const modelUser = require('../users/modelUser')

module.exports = {
   async add(bodyPet){
      return new Promise(async (resolve, reject)=>{
         try{
            const pet = petModel(
            {  owner: bodyPet.user, 
               name: bodyPet.name, 
               dateBorn: bodyPet.dateBorn, 
               city: bodyPet.city,
               description: bodyPet.description
            })
            await pet.save()
            const user = await modelUser.findById(bodyPet.user)
            user.pets = user.pets.concat(pet._id)
            await user.save()
            return resolve( {code:200, err: null} )
         }catch(e){
            console.log(e)
            reject( {code: 400, err: e} )
         }
      })
   }
}
