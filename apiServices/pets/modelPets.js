const { Schema, model  } = require('mongoose') 

const petsSchema = new Schema({
     name: {
      type:String,
      required: true
   },
   dateBorn: Date,
   city: String,
   description: String,
   adoption: Boolean,
   owner: {
      type: Schema.ObjectId,
      ref: 'Profile'
   },
   oldOwner: {
      type: Schema.ObjectId,
      ref: 'Profile'
   },
   pictures: [{
      type: String
   }]
})

module.exports = new model('Pet', petsSchema)
