const mongoose = require('mongoose')

const uri = "mongodb://localhost:27017/test"

mongoose.connect(uri, {}).catch(err => console.log(err))

const db = mongoose.connection;


db.once("open", _=>{
   console.log('Bd conectada: ', uri)
})


db.on('error', err=>{
   console.log(err)
})
