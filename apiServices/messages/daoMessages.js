require('../../mongoDb/index')
const Message = require('./modelMessages')

module.exports = {
    add(data){
        const newMessage = new Message({
            from : data.from,
            to : data.to,
            pet : data.pet,
            message : data.message
        }) 
        newMessage.save(function(err){
            if(err){
                console.log(err)
            }
        })
    },
    getById(id){
        return new Promise(function(resolve, reject){
            Message.findOne( { to: id}).populate(['pet', 'from', 'to'])
            .then(messages =>{
                console.log(messages)
                return resolve(messages)
            })
        })
     
    } 
}