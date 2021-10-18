const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   username:{
      type: String,
      unique: true,
      required: true
   },
   password: String,
   email: {
      type: String
   },
   profile: {
      type: Schema.ObjectId,
      ref: 'Profile'
   }
}    
)

module.exports = new model('User', userSchema)
