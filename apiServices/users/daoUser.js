require('../../mongoDb/index')
const userModel = require('./modelUser')

module.exports = {
   async add(usern, pass){
      return new Promise(async (resolve, reject)=>{
         try{
            const user = new userModel({ username: usern, password: pass})
            await user.save()
            return resolve( {code: 200, err: null} )
         }catch(e){
            return reject( {code:400, err: e} )
         }
      })
   }
}
