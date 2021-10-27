require('../../mongoDb/index')
const Message = require('./modelMessages')

module.exports = {
    async add(data){
        return new Promise(async function(resolve, reject){
            try{
                const newMessage = new Message({
                    from : data.from,
                    to : data.to,
                    pet : data.pet,
                    message : data.message
            }) 
                await newMessage.save()
            }catch(e){
                console.log(e)
                reject(e)
            }   
        })
    },
    getById(id){
        return new Promise(function(resolve, reject){
            Message.findOne( { to: id}).populate(['pet', 'from', 'to'])
            .then(messages =>{
                return resolve(messages)
            }).catch(e=>reject(e))
        })
     
    } 
}