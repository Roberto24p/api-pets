require('../../mongoDb/index')
const Profile = require('./modelProfiles')

module.exports = {
   async getAll(){
      return new Promise( async (resolve, reject)=>{
         try{
            const profiles = Profile.find({}).populate(['pets', 'interestedPets'])
            return resolve(profiles)
         }catch(e){
            reject(e)
         }
      } )
   }
   ,
   async addInterested(body){
        return new Promise(async (resolve, reject)=>{
            try{
                const profile = await Profile.findById(body.id)
                profile.interestedPets = profile.interestedPets.concat(body.pet)
                await profile.save()
                return resolve( )
            }catch(e){
                console.log(e)
                return reject(e)
            }
        })
   }
}
