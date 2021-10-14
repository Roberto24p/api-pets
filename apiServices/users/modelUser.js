const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   username:{
      type: String,
      unique: true,
      required: true
   },
   password: String,
   date: {
      type: Date,
      default: new Date()
   },
   email: {
      type: String
   },
   dateBorn: {
      type: Date
   },
   about: {
      type: String
   },
   city: {
      type: String
   },
   pets: [{
      type: Schema.ObjectId,
      ref: 'Pet'
   }]
}    
)

module.exports = new model('User', userSchema)
