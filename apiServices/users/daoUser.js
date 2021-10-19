require('../../mongoDb/index')
const User = require('./modelUser')
const Profile = require('../profiles/modelProfiles')
module.exports = {
   async add(bodyUser){
      return new Promise(async (resolve, reject)=>{
         try{
            const profile = new Profile({ 
               names: bodyUser.names,
               dateBorn: '',
               about: bodyUser.about,
               city: bodyUser.city,
               
            })
            await profile.save()
            const user = new User({ username: bodyUser.username, 
               password: bodyUser.password,
               email: bodyUser.pass,
               profile: profile._id
            })
            await user.save()
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
            const users = User.find({})
            console.log(users)
            return resolve(users)
         }catch(e){
            reject(e)
         }
      } )
   }
}
