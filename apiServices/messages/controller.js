const daoMessage = require('./daoMessages')
module.exports = {
    addMessage(req, res, next){
        const { body } = req
        if(body.from == null || body.to == null || body.pet) next()
        daoMessage.add(body)
        res.status(200)
        res.send("Enviado con exito")
    },
    async getByID(req, res){
        const { id } = req.params
        const data = await daoMessage.getById(id)
        console.log(data)
        res.send(data)
    }
}