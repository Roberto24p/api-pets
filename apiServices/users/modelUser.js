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
   }
})

module.exports = new model('User', userSchema)
