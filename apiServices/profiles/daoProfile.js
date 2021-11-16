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
   },
   async getById(id){
      return new Promise(async (resolve, reject)=>{
         try{
            const profile = await Profile.findById(id).populate('pets')
            return resolve(profile)
         }catch(e){
            console.log(e)
            return reject(e)
         }
      })
   },
   async putProfile(profile){
      return new Promise(async (resolve, reject)=>{
         try{
     
            Profile.findByIdAndUpdate(profile.profile, profile, (err, update)=>{
               if(err) reject(err)
               else {
                  resolve(update)}
            })
         }catch(e){
            reject(e)
         }
      })
   }
}
