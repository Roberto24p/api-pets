const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const { error404Handler, errorHandler } = require('./middleware/error'); 
const app = express()
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});
app.use(cors({
   origin: 'http://localhost:8080'
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', routes)
app.use(errorHandler);


app.listen(8090, function(){
   console.log("listen at 8090")
})
