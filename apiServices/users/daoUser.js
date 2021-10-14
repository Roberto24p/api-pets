require('../../mongoDb/index')
const userModel = require('./modelUser')

module.exports = {
   async add(bodyUser){
      return new Promise(async (resolve, reject)=>{
         try{
            const user = new userModel({ username: bodyUser.username, 
               password: bodyUser.password,
               email: bodyUser.pass,
               dateBorn: '',
               about: bodyUser.about,
               city: bodyUser.city,
               
            })
            await user.save()
            return resolve( {code: 200, err: null} )
         }catch(e){
            console.log(e)
            return reject( {code:400, err: e} )
         }
      })
   }
}
