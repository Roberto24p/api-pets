const daoMessage = require('./daoMessages')
module.exports = {
    async addMessage(req, res, next){
        const { body } = req
        if(body.from == "" || body.to == "" || body.pet == ""){
            return res.status(400).json({ message: "Datos incompletos" })
        } 
        try{
            await daoMessage.add(body)
            return res.status(200).json( {message: "Enviado con exito"} )
        }catch(e){
            return next(e)
        }
    },
    async getByID(req, res, next){
        const { id } = req.params
        if(!id){
            return res.satus(400).json( { message: "Error, no hay id de mensaje"} )
        }
        try{
            const data = await daoMessage.getById(id)
            if(!data) res.sendStatus(404)
            res.status(200).json({data: data})
        }catch(e){
            next(e)
        }
        
    }
}