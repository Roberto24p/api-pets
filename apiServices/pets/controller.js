module.exports = {
   getPets(req, res){
      let dato = 5
      let resultado = 3 + dato
      return res.send({resultado})
   }
}
