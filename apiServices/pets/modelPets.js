const { Schema, model  } = require('mongoose') 

const petsSchema = new Schema({
     name: {
      type:String,
      required: true
   },
   dateBorn: Date,
   city: String,
   description: String,
   owner: {
      type: Schema.ObjectId,
      ref: 'user'
   }
})

module.exports = new model('Pet', petsSchema)
