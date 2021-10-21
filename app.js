const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', routes)
app.use(function(err,req, res, next){
   console.error(err.stack)
   res.status(500).send( { error: err})
})
app.listen(8080, function(){
   console.log("listen at 8080")
})
