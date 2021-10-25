require('../../mongoDb/index')
const Profile = require('./modelProfiles')

module.exports = {
   async add(bodyUser){
      return new Promise(async (resolve, reject)=>{
         try{
            const profile = new Profile({ 
               dateBorn: '',
               about: bodyUser.about,
               city: bodyUser.city,
               
            })
            await profile.save()
            return resolve( {code: 200, err: null} )
         }catch(e){
            console.log(e)
            return reject( {code:400, err: e} )
         }
      })
   },
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
                return resolve( {code:200, err: null} )
            }catch(e){
                console.log(e)
                return reject('error')
            }
        })
   }
}
