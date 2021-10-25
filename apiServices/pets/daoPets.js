require('../../mongoDb/index')
const Pet = require('./modelPets')
const Profile = require('../profiles/modelProfiles')

module.exports = {
   async add(bodyPet){
      return new Promise(async (resolve, reject)=>{
         try{
            const pet = Pet(
            {  owner: bodyPet.user, 
               name: bodyPet.name, 
               dateBorn: bodyPet.dateBorn, 
               city: bodyPet.city,
               description: bodyPet.description,
               adoption: bodyPet.adoption
            })
            await pet.save()
            const profile = await Profile.findById(bodyPet.user)
            profile.pets = profile.pets.concat(pet._id)
            await profile.save()
            return resolve( {code:200, err: null} )
         }catch(e){
            console.log(e)
            reject( {code: 400, err: e} )
         }
      })
   },
   async getPetAdoption(){
      return new Promise(async (resolve, reject)=>{
         try{
            const result = await Pet.find({ adoption:'true' }).populate('owner')
            return resolve(result)
         }catch(e){
            reject(e)
         }
      }) 
   }
}
